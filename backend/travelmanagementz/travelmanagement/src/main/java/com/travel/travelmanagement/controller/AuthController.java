package com.travel.travelmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travel.travelmanagement.dto.LoginRequest;
import com.travel.travelmanagement.dto.LoginResponse;
import com.travel.travelmanagement.security.JwtUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {
@Autowired
private AuthenticationManager authenticationManager; //authentication manager checks email+password using spring security
@Autowired
private JwtUtil jwtUtil; //generates token after successful login
@PostMapping("/login")
public LoginResponse login(@RequestBody LoginRequest request)
{
    try
    {
        System.out.println("LOGIN ATTEMPT : " + request.getEmail());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        System.out.println("AUTHENTICATION SUCCESS");

        String token = jwtUtil.generateToken(request.getEmail());

        return new LoginResponse(token);
    }
    catch(Exception e)
    {
        System.out.println("AUTHENTICATION FAILED");
        e.printStackTrace();
        throw e;
    }
}
}
