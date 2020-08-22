package com.gosystem.rest.api.restulapi;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for(int i=1; i<=10; i++) {
			String encodedstr = encoder.encode("password123");
			System.out.println(encodedstr);
		}
	}

}
