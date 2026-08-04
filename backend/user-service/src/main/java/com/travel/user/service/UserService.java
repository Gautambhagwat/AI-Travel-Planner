package com.travel.user.service;

import java.util.List;

import com.travel.user.dto.UserRequest;
import com.travel.user.dto.UserResponse;

public interface UserService {

    UserResponse createUser(UserRequest request);

    UserResponse updateUser(Long id, UserRequest request);

    List<UserResponse> getAllUsers();

    UserResponse getUserById(Long id);

    UserResponse getUserByEmail(String email);

    void deleteUser(Long id);

    UserResponse updateUserByEmail(String email, UserRequest request);
}