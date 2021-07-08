package com.userandadmin.wsproject.user;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
public class User {
	@Id
	@GeneratedValue
	private long id;
	
	@NotNull(message = "")
	@Size(min = 4, max = 255)
	@UniqueUsername(message = "")
	private String username;
	
	@NotNull
	@Size(min = 4, max = 255)
	private String fullName;
	
	@Size(min = 8, max = 255)
	@NotNull
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "")
	private String password;
	
	private String photo;
	
	private Date createdAt;
	
}
