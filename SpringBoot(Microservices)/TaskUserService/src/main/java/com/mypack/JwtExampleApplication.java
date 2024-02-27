package com.mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.mypack.entities.Role;
import com.mypack.entities.User;
import com.mypack.repositories.UserRepository;

@SpringBootApplication
public class JwtExampleApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(JwtExampleApplication.class, args);
	}
	
	
	

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		User adminAccount = userRepository.findByRole(Role.ADMIN);
		if (adminAccount == null) {
			User user = new User();
			user.setEmail("admin@gmail.com");
			user.setPassword(new BCryptPasswordEncoder().encode("admin"));
			user.setFullName("admin");
			user.setRole(Role.ADMIN);
			userRepository.save(user);
		}

	}
}
