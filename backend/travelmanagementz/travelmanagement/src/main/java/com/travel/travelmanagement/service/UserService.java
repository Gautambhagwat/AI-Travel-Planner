package com.travel.travelmanagement.service;

import java.util.List;

import com.travel.travelmanagement.entity.Users;

public interface UserService 
{
Users registerUser(Users user);
List<Users> getAllUsers();
Users getUserById(Long id);
void deleteUser(Long id);
}
