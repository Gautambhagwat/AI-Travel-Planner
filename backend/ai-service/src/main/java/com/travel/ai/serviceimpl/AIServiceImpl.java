package com.travel.ai.serviceimpl;


import com.travel.ai.config.OpenRouterConfig;
import com.travel.ai.dto.AIRequest;
import com.travel.ai.dto.AIResponse;
import com.travel.ai.service.AIService;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.*;

/**
 * AIServiceImpl — calls OpenRouter's chat/completions endpoint using
 * Bearer authentication and the OpenAI-compatible request format.
 *
 * Fallback messages are returned (instead of throwing) for:
 *   - HTTP 401 Unauthorized  → invalid / missing API key
 *   - HTTP 429 Too Many Requests → rate-limited
 *   - HTTP 5xx Server Error  → OpenRouter-side failure
 *   - Any other exception    → generic fallback
 */
@Service
public class AIServiceImpl implements AIService {

    private static final String OPENROUTER_URL =
            "https://openrouter.ai/api/v1/chat/completions";

    private final RestTemplate restTemplate;
    private final OpenRouterConfig openRouterConfig;


    public AIServiceImpl(RestTemplate restTemplate,
                         OpenRouterConfig openRouterConfig) {
        this.restTemplate = restTemplate;
        this.openRouterConfig = openRouterConfig;
    }


    @Override
    public AIResponse generateRecommendation(AIRequest request) {

        AIResponse aiResponse = new AIResponse();
        aiResponse.setDestination(request.getDestination());
        System.out.println("===== AI REQUEST RECEIVED =====");
        System.out.println(request.getDestination());
        System.out.println(request.getDays());
        System.out.println(request.getBudget());
        System.out.println(request.getInterests());
        /* ── 1. Build the prompt ────────────────────────────────────────── */
        String prompt = String.format("""
You are an expert travel planner.

Your task is to generate a personalized travel itinerary.

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT return Markdown.
3. Do NOT return explanations.
4. Do NOT wrap the JSON inside ```json blocks.
5. Do NOT include any text before or after the JSON.
6. Every field shown in the JSON schema is REQUIRED.
7. Never omit hotel or transport.
8. If uncertain, invent a realistic recommendation rather than leaving a field out.
9. Return every key exactly as shown.
7. All prices should be approximate.
8. Use real attractions and restaurants.
9. Keep locations geographically logical.
10. Use Indian Rupees (₹) unless another currency is explicitly requested.
11. Recommend ONE real hotel that matches the user's budget.
12. Choose ONE primary transport mode (Taxi, Bus, Train, Flight, Rental Car, Walking or Scooter) based on the itinerary.
The JSON is invalid if hotel or transport is missing. Every object and every key in the schema must be present exactly once.
Return EXACTLY this JSON structure:

{
  "days":[
    {
      "day":1,
      "title":"Title of the day",
      "budgetToday":"₹4000",
      "sections":[
        {
          "period":"Morning",
          "activities":[
            {
              "title":"Visit Basilica of Bom Jesus",
              "description":"Explore Goa's UNESCO World Heritage church.",
              "location":"Old Goa",
              "cost":"Free",
              "transport":"Taxi"
            },
            {
              "title":"Breakfast at Cafe Bodega",
              "description":"Enjoy authentic Goan breakfast.",
              "location":"Panjim",
              "cost":"₹350",
              "transport":"Walk"
            }
          ]
        },
        {
          "period":"Afternoon",
          "activities":[]
        },
        {
          "period":"Evening",
          "activities":[]
        },
        {
          "period":"Night",
          "activities":[]
        }
      ]
    }
  ],

  "summary": {
                            "estimatedBudget": "₹20000",
                        
                            "hotel": {
                              "name": "The Fern Goa",
                              "type": "4-Star Hotel",
                              "location": "Candolim",
                              "description": "A centrally located hotel with easy access to beaches, restaurants and nightlife."
                            },
                        
                            "transport": "Taxi",
                        
                            "bestFoods": [
                              "Fish Curry Rice",
                              "Bebinca",
                              "Prawn Balchão"
                            ],
                        
                            "mustVisit": [
                              "Basilica of Bom Jesus",
                              "Fort Aguada",
                              "Palolem Beach"
                            ],
                        
                            "travelTips": [
                              "Rent a scooter.",
                              "Carry sunscreen.",
                              "Start sightseeing early."
                            ]
                          }
}

Trip Details

Destination: %s

Duration: %d Days

Budget: %s

Interests: %s

Generate the JSON now.
""",
                request.getDestination(),
                request.getDays(),
                request.getBudget(),
                request.getInterests());

        /* ── 2. Build OpenRouter / OpenAI-compatible request body ────────── */
        Map<String, Object> message = new HashMap<>();
        message.put("role", "user");
        message.put("content", prompt);

        Map<String, Object> body = new HashMap<>();
        body.put("model", openRouterConfig.getModel());
        body.put("messages", new Object[]{message});

        /* ── 3. Set Authorization header ─────────────────────────────────── */
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openRouterConfig.getApiKey());

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        /* ── 4. Call OpenRouter and parse response ────────────────────────── */
        try {
            ResponseEntity<Map> responseEntity = restTemplate.exchange(
                    OPENROUTER_URL,
                    HttpMethod.POST,
                    entity,
                    Map.class
            );

            Map<?, ?> response = responseEntity.getBody();
            String text = extractContent(response);
            aiResponse.setAiRecommendation(text);

        } catch (HttpClientErrorException e) {
            aiResponse.setAiRecommendation(handleClientError(e));
        } catch (HttpServerErrorException e) {
            aiResponse.setAiRecommendation(
                    "The AI service is temporarily unavailable (server error). "
                    + "Please try again in a few moments."
            );
        } catch (Exception e) {
            aiResponse.setAiRecommendation(
                    "Unable to generate a recommendation at this time. "
                    + "Please try again later."
            );
        }

        return aiResponse;
    }


    /* ── Private helpers ─────────────────────────────────────────────────── */

    /**
     * Extracts the assistant's text from an OpenAI-format response:
     *   choices[0].message.content
     */
    @SuppressWarnings("unchecked")
    private String extractContent(Map<?, ?> response) {
        if (response == null) {
            return "No response received from the AI service.";
        }

        try {
            List<?> choices = (List<?>) response.get("choices");
            Map<?, ?> firstChoice = (Map<?, ?>) choices.get(0);
            Map<?, ?> messageMap = (Map<?, ?>) firstChoice.get("message");
            Object content = messageMap.get("content");
            return content != null ? content.toString() : "No content in AI response.";
        } catch (Exception e) {
            return "Unable to parse the AI response.";
        }
    }

    /**
     * Maps 4xx HTTP errors to user-friendly fallback messages.
     */
    private String handleClientError(HttpClientErrorException e) {
        int statusCode = e.getStatusCode().value();
        switch (statusCode) {
            case 401:
                return "AI service authentication failed. "
                       + "Please check the API key configuration.";
            case 429:
                return "The AI service is currently rate-limited. "
                       + "Please try again in a few minutes.";
            default:
                return "The AI service returned an unexpected error ("
                       + statusCode + "). Please try again later.";
        }
    }
}