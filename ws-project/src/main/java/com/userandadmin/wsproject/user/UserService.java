package com.userandadmin.wsproject.user;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.userandadmin.wsproject.user.User;
import com.userandadmin.wsproject.user.UserRepository;

@Service
public class UserService {
	UserRepository userRepository;
	//PasswordEncoder passwordEncoder;
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
		//this.passwordEncoder = new BCryptPasswordEncoder();	
	}

	public void save(User user) {
		//user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);		
	}
}
