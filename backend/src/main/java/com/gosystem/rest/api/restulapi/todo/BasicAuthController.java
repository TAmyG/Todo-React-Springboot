package com.gosystem.rest.api.restulapi.todo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gosystem.rest.basic.auth.AuthenticationBean;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BasicAuthController {
	

	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean(){
		return new AuthenticationBean("You are authenticated");
	}

	
}
