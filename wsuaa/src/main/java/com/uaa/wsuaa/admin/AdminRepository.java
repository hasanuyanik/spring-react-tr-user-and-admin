package com.uaa.wsuaa.admin;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	Admin findByUsername(String username);
	
	Page<Admin> findByUsernameNot(String username, Pageable page);
}
