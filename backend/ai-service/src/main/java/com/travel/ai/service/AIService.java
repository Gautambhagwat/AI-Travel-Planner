package com.travel.ai.service;


import com.travel.ai.dto.AIRequest;
import com.travel.ai.dto.AIResponse;


public interface AIService {


    AIResponse generateRecommendation(AIRequest request);


}