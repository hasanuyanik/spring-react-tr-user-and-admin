package com.uaa.wsuaa.admin;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String>{

	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public boolean isValid(String username, ConstraintValidatorContext context) {
		if(adminRepository != null) {
		Admin admin = adminRepository.findByUsername(username);
		if(admin != null) {
			return false;
		}
		}
		return true;
	}

}
