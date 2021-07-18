package com.uaa.wsuaa.admin.vm;

import com.uaa.wsuaa.admin.Admin;

import lombok.Data;

@Data
public class AdminVM {
	
	private String username;
	
	public AdminVM(Admin admin) {
		this.setUsername(admin.getUsername());
	}
}
