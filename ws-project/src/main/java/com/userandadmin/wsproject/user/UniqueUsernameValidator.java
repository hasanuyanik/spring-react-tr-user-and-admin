package com.userandadmin.wsproject.user;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.userandadmin.wsproject.user.UniqueUsername;
import com.userandadmin.wsproject.user.User;
import com.userandadmin.wsproject.user.UserRepository;

public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String>{

	@Autowired
	UserRepository userRepository;
	
	@Override
	public boolean isValid(String username, ConstraintValidatorContext context) {
		User user = userRepository.findByUsername(username);
		if(user != null) {
			return false;
		}
		return true;
	}

}
