package com.travel.travelmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travel.travelmanagement.entity.Users;
import com.travel.travelmanagement.service.UserService;
//controller is used to talk to the service layer
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	@PostMapping("/register")
	public Users registerUser(@RequestBody Users user)
	{  System.out.println(user.getName());
    System.out.println(user.getEmail());
		
		return userService.registerUser(user);
	}
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess()
	{
		return "Welcome Admin";
	}
	@GetMapping("/users")
	@PreAuthorize("hasRole('USER')")
	public String userAccess()
	{
		System.out.println("User endpoint hit");
		return "Welcome user";
	}
	
}
