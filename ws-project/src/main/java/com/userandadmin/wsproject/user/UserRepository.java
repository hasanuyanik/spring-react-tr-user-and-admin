package com.userandadmin.wsproject.user;

import org.springframework.data.jpa.repository.JpaRepository;

import com.userandadmin.wsproject.user.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByUsername(String username);
}
