package com.uaa.wsuaa.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.uaa.wsuaa.shared.GenericResponse;


@RestController
public class AuthController {
	
	@Autowired
	AuthService authService;

	@PostMapping("/api/1.0/auth")
	AuthResponse handleAuthentication(@RequestBody Credentials credentials) {
		return authService.authenticate(credentials);
	}
	@PostMapping("/api/1.0/admin/auth")
	AuthResponse handleAuthenticationAdmin(@RequestBody Credentials credentials) {
		return authService.authenticateAdmin(credentials);
	}
	
	@PostMapping("/api/1.0/logout")
	GenericResponse handleLogout(@RequestHeader(name = "Authorization") String authorization) {
		String token = authorization.substring(7);
		
		try {
		authService.clearToken(token);
		return new GenericResponse("Logout Success "+ token);
		}catch(Exception e) {
		return new GenericResponse(token+"-----------Logout Fail----------"+e);	
		}
	}
	
}
