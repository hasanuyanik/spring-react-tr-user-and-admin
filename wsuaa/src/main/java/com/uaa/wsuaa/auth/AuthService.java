package com.uaa.wsuaa.auth;

import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.uaa.wsuaa.admin.Admin;
import com.uaa.wsuaa.admin.AdminRepository;
import com.uaa.wsuaa.admin.vm.AdminVM;
import com.uaa.wsuaa.user.User;
import com.uaa.wsuaa.user.UserRepository;
import com.uaa.wsuaa.user.vm.UserVM;


@Service
public class AuthService {
	
	UserRepository userRepository;
	
	AdminRepository adminRepository;

	PasswordEncoder passwordEncoder;
	
	TokenRepository tokenRepository;
	
	public AuthService(UserRepository userRepository, AdminRepository adminRepository, PasswordEncoder passwordEncoder, TokenRepository tokenRepository) {
		super();
		this.userRepository = userRepository;
		this.adminRepository = adminRepository;
		this.passwordEncoder = passwordEncoder;
		this.tokenRepository = tokenRepository;
	}

	public AuthResponse authenticate(Credentials credentials) {
		User inDB = userRepository.findByUsername(credentials.getUsername());
		if(inDB == null) {
			throw new AuthException();
		}
		boolean matches = passwordEncoder.matches(credentials.getPassword(), inDB.getPassword());
		if(!matches) {
			throw new AuthException();
		}	
			UserVM userVM = new UserVM(inDB);
			String token = generateRandomToken();
			
			Token tokenEntity = new Token();
			tokenEntity.setToken(token);
			tokenEntity.setUser(inDB);
			tokenRepository.save(tokenEntity);			
			AuthResponse response = new AuthResponse();
			response.setUser(userVM);
			response.setToken(token);
			return response;
	}
	
	public AuthResponse authenticateAdmin(Credentials credentials) {
		Admin inDB = adminRepository.findByUsername(credentials.getUsername());
		if(inDB == null) {
			throw new AuthException();
		}
		boolean matches = passwordEncoder.matches(credentials.getPassword(), inDB.getPassword());
		if(!matches) {
			throw new AuthException();
		}	
			AdminVM adminVM = new AdminVM(inDB);
			String token = generateRandomToken();
			
			Token tokenEntity = new Token();
			tokenEntity.setToken(token);
			tokenEntity.setAdmin(inDB);
			tokenRepository.save(tokenEntity);			
			AuthResponse response = new AuthResponse();
			response.setAdmin(adminVM);
			response.setToken(token);
			return response;
	}

	@Transactional
	public UserDetails getUserDetails(String token) {
		Optional<Token> optionalToken = tokenRepository.findById(token);
		if(!optionalToken.isPresent()) {
			return null;
		}
		return optionalToken.get().getUser();
	}
	
	public String generateRandomToken() {
		return UUID.randomUUID().toString().replaceAll("-","");
	}

	public void clearToken(String token) {
		tokenRepository.deleteById(token);
	}

}
