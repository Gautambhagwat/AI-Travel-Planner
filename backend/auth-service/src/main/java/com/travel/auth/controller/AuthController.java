package com.travel.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.travel.auth.dto.LoginResponse;
import com.travel.auth.entity.User;
import com.travel.auth.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {

        return authService.register(user);

    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody User user) {

        return authService.login(
                user.getEmail(),
                user.getPassword()
        );

    }

}