package com.travel.ai.serviceimpl;


import com.travel.ai.config.GeminiConfig;
import com.travel.ai.dto.AIRequest;
import com.travel.ai.dto.AIResponse;
import com.travel.ai.service.AIService;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;


@Service
public class AIServiceImpl implements AIService {


    private final RestTemplate restTemplate;

    private final GeminiConfig geminiConfig;



    public AIServiceImpl(RestTemplate restTemplate,
                         GeminiConfig geminiConfig) {

        this.restTemplate = restTemplate;
        this.geminiConfig = geminiConfig;

    }



    @Override
    public AIResponse generateRecommendation(AIRequest request) {


        String prompt =
                "Create a travel plan for "
                + request.getDestination()
                + " for "
                + request.getDays()
                + " days with budget "
                + request.getBudget()
                + " and interests "
                + request.getInterests();



        Map<String,Object> textPart = new HashMap<>();

        textPart.put("text", prompt);



        Map<String,Object> part = new HashMap<>();

        part.put("parts", new Object[]{textPart});



        Map<String,Object> body = new HashMap<>();

        body.put("contents", new Object[]{part});



        String url =
                geminiConfig.getApiUrl()
                + "?key="
                + geminiConfig.getApiKey();



        Map response =
                restTemplate.postForObject(
                        url,
                        body,
                        Map.class
                );



        AIResponse aiResponse = new AIResponse();

        aiResponse.setDestination(request.getDestination());


        try {

            Map candidate =
                    (Map)((java.util.List)response.get("candidates"))
                    .get(0);


            Map content =
                    (Map)candidate.get("content");


            java.util.List parts =
                    (java.util.List)content.get("parts");


            Map firstPart =
                    (Map)parts.get(0);


            aiResponse.setAiRecommendation(
                    firstPart.get("text").toString()
            );


        }
        catch(Exception e){

            aiResponse.setAiRecommendation(
                    "Unable to generate recommendation"
            );

        }


        return aiResponse;

    }

}