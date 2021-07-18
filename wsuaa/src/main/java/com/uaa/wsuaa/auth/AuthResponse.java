package com.uaa.wsuaa.auth;

import com.uaa.wsuaa.admin.vm.AdminVM;
import com.uaa.wsuaa.user.vm.UserVM;

import lombok.Data;

@Data
public class AuthResponse {

	private String token;
	
	private UserVM user;
	
	private AdminVM admin;
}
