package com.travel.auth.service;

import com.travel.auth.entity.User;

public interface AuthService {

    User register(User user);

    User login(String email, String password);

}