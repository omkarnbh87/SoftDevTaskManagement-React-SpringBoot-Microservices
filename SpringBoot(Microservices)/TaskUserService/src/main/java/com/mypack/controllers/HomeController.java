package com.mypack.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mypack.entities.User;
import com.mypack.services.UserService;

@RestController
@RequestMapping("/home")
public class HomeController {
	@Autowired
	private UserService userService;

	
	
	@GetMapping("/user/profile")
	public User getUserProfile(@RequestHeader("Authorization") String token) {
		return userService.getUser(token.substring(7));
		
	}
	
	
	@GetMapping("/user")
	public List<User> getUser(@RequestHeader("Authorization") String jwt) {
		System.out.println("getting users");
		System.out.println("jwt : " + jwt);
		return userService.getUsers();
	}

	@GetMapping("/current-user")
	public String getLoggedInUser(Principal principal) {
		return principal.getName();
	}
}
