package com.mypack.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mypack.entities.Role;
import com.mypack.entities.User;
import com.mypack.repositories.UserRepository;
import com.mypack.security.JwtHelper;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private JwtHelper helper;

	public List<User> getUsers() {
		return repository.findAll();
	}

	public User createUser(User user) {

		user.setPassword(encoder.encode(user.getPassword()));
		
		return repository.save(user);
	}

	public User getUser(String token) {
		
		Optional<User> user = repository.findByEmail(helper.getUsernameFromToken(token));
		User user2 = new User();
		user2.setFullName(user.get().getFullName());
		user2.setEmail(user.get().getEmail());
		user2.setId(user.get().getId());
		user2.setPassword(user.get().getPassword());
		user2.setRole(user.get().getRole());
		return user2;
		
	}
}
