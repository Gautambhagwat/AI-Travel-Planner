package com.travel.auth.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
    public LoginResponse login(String email, String password) {

        User user = userRepository.findByEmail(email);

        System.out.println("Email received: " + email);
        System.out.println("User found: " + user);

        if (user == null) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "User not found"
            );
        }

        System.out.println("Password in DB: " + user.getPassword());
        System.out.println("Password entered: " + password);

        if (!user.getPassword().equals(password)) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid password"
            );
        }

        String token = jwtUtil.generateToken(email);

        return new LoginResponse(token, "Login Successful");
    }
}