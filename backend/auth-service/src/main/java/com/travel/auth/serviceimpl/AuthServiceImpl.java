package com.travel.auth.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.auth.dto.LoginResponse;
import com.travel.auth.entity.User;
import com.travel.auth.repository.UserRepository;
import com.travel.auth.security.JwtUtil;
import com.travel.auth.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public User register(User user) {

        return userRepository.save(user);

    }

    @Override
    public LoginResponse login(
            String email,
            String password) {

        User user = userRepository.findByEmail(email);

        if (user == null) {

            return new LoginResponse(
                    null,
                    "User not found"
            );

        }

        if (!user.getPassword().equals(password)) {

            return new LoginResponse(
                    null,
                    "Invalid Password"
            );

        }

        String token = jwtUtil.generateToken(email);

        return new LoginResponse(
                token,
                "Login Successful"
        );

    }

}