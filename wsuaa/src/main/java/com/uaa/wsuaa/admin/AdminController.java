package com.uaa.wsuaa.admin;

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

import com.uaa.wsuaa.shared.CurrentUser;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.uaa.wsuaa.shared.GenericResponse;
import com.uaa.wsuaa.admin.vm.AdminVM;

@RestController
@RequestMapping("/api/1.0")
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@PostMapping("/admin")
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@Valid @RequestBody Admin admin) {
		adminService.save(admin);
		return new GenericResponse("User Created");
	}

	@GetMapping("/admin/{username}")
	AdminVM getUser(@PathVariable String username) {
		Admin admin = adminService.getByUsername(username);
		return new AdminVM(admin);
	}

	
}
