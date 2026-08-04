package com.travel.user.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.user.dto.UserRequest;
import com.travel.user.dto.UserResponse;
import com.travel.user.entity.User;
import com.travel.user.repository.UserRepository;
import com.travel.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserResponse createUser(UserRequest request) {

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setCountry(request.getCountry());

        User savedUser = userRepository.save(user);

        return convertToResponse(savedUser);
    }

    @Override
    public UserResponse updateUser(Long id, UserRequest request) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setCountry(request.getCountry());

        User updatedUser = userRepository.save(user);

        return convertToResponse(updatedUser);
    }

    @Override
    public List<UserResponse> getAllUsers() {

        return userRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUserById(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return convertToResponse(user);
    }

    @Override
    public UserResponse getUserByEmail(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return convertToResponse(user);
    }

    @Override
    public void deleteUser(Long id) {

        userRepository.deleteById(id);
    }

    private UserResponse convertToResponse(User user) {

        UserResponse response = new UserResponse();

        response.setId(user.getId());
        response.setFullName(user.getFullName());
        response.setEmail(user.getEmail());
        response.setPhone(user.getPhone());
        response.setCity(user.getCity());
        response.setCountry(user.getCountry());

        return response;
    }

    @Override
    public UserResponse updateUserByEmail(String email, UserRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFullName(request.getFullName());
        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setCountry(request.getCountry());

        // Keep existing email and password
        User updatedUser = userRepository.save(user);

        return convertToResponse(updatedUser);
    }
}