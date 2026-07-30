package com.travel.auth.serviceimpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.auth.entity.User;
import com.travel.auth.repository.UserRepository;
import com.travel.auth.service.AuthService;


@Service
public class AuthServiceImpl implements AuthService {


    @Autowired
    private UserRepository userRepository;



    @Override
    public User register(User user) {

        return userRepository.save(user);

    }



    @Override
    public User login(String email, String password) {

        User user = userRepository.findByEmail(email);

        if(user != null && user.getPassword().equals(password)) {

            return user;

        }

        return null;
    }

}