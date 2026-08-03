package com.travel.ai.controller;


import com.travel.ai.dto.AIRequest;
import com.travel.ai.dto.AIResponse;
import com.travel.ai.service.AIService;

import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/ai")
public class AIController {


    private final AIService aiService;



    public AIController(AIService aiService){

        this.aiService = aiService;

    }



    @PostMapping("/recommend")
    public AIResponse generateRecommendation(
            @RequestBody AIRequest request
    ){

        return aiService.generateRecommendation(request);

    }

}