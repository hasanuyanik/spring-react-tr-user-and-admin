package com.uaa.wsuaa.auth;

import com.uaa.wsuaa.user.vm.UserVM;

import lombok.Data;

@Data
public class AuthResponse {

	private String token;
	
	private UserVM user;
}
