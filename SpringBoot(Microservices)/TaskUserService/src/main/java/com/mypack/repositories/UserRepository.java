package com.mypack.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mypack.entities.Role;
import com.mypack.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public Optional<User> findByEmail(String email);
	
	User findByRole(Role role);
}
