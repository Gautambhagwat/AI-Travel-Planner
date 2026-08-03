package com.travel.auth.service;

import com.travel.auth.dto.LoginResponse;
import com.travel.auth.entity.User;

public interface AuthService {

    User register(User user);

    LoginResponse login(String email, String password);

}