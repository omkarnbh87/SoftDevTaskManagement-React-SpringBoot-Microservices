package com.mypack.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.mypack.model.UserDto;

@FeignClient(name = "USER-SERVICE", url = "http://localhost:5001")
public interface UserService {

	@GetMapping("/home/user/profile")
	UserDto getUserProfile(@RequestHeader("Authorization") String jwt)throws Exception;
}
