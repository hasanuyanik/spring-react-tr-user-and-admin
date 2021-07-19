package com.uaa.wsuaa.user;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.uaa.wsuaa.admin.Admin;
import com.uaa.wsuaa.admin.AdminService;
import com.uaa.wsuaa.shared.CurrentUser;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.uaa.wsuaa.shared.GenericResponse;
import com.uaa.wsuaa.user.vm.UserUpdateVM;
import com.uaa.wsuaa.user.vm.UserVM;

@RestController
@RequestMapping("/api/1.0")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	AdminService adminService;
	
	@PostMapping("/users")
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@Valid @RequestBody User user) {
		userService.save(user);
		return new GenericResponse("User Created");
	}
	
	@GetMapping("/users")
	Page<UserVM> getUsers(Pageable page, @CurrentUser Admin admin){
		return userService.getUsers(page).map(UserVM::new);
	}
	@GetMapping("/users/{username}")
	UserVM getUser(@PathVariable String username) {
		User user = userService.getByUsername(username);
		return new UserVM(user);
	}
	
	@PutMapping("/users/{username}")
	@PreAuthorize("#username == principal.username")
	UserVM updateUser(@Valid @RequestBody UserUpdateVM updateUser, @PathVariable String username) {
		User user = userService.updateUser(username, updateUser);
		return new UserVM(user);
	}
	
	@DeleteMapping("/users/{username}")
	@PreAuthorize("#username == principal.username")
	GenericResponse deleteUser(@PathVariable String username) {
		userService.deleteUser(username);
		return new GenericResponse("User is removed");
	}
	
}