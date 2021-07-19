package com.uaa.wsuaa.admin;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AdminService {
	AdminRepository adminRepository;
	PasswordEncoder passwordEncoder;
	public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
		this.adminRepository = adminRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public void save(Admin admin) {
		admin.setPassword(this.passwordEncoder.encode(admin.getPassword()));
		adminRepository.save(admin);		
	}

	public Page<Admin> getUsers(Pageable page, Admin admin){
		if(admin != null) {
			return adminRepository.findByUsernameNot(admin.getUsername(), page);
		}
		return adminRepository.findAll(page);
	}

	public Admin getByUsername(String username) {
		Admin inDB =  adminRepository.findByUsername(username);
		if(inDB == null) {
			return null;
		}
		return inDB;
	}
	
}
