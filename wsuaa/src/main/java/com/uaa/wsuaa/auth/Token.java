package com.uaa.wsuaa.auth;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.uaa.wsuaa.admin.Admin;
import com.uaa.wsuaa.user.User;

import lombok.Data;

@Entity
@Data
public class Token {
	
	@Id
	private String token;
	
	@ManyToOne()
	private Admin admin;
	
	@ManyToOne()
	private User user;
	
	
}
