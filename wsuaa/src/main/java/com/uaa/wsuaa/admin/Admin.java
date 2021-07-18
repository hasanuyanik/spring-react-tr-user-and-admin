package com.uaa.wsuaa.admin;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import com.uaa.wsuaa.auth.Token;
import com.uaa.wsuaa.user.UniqueUsername;

import lombok.Data;

@Data
@Entity
public class Admin implements UserDetails{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	private long id;
	
	@NotNull(message = "{uaa.constraints.username.NotNull.message}")
	@Size(min = 4, max = 255)
	@UniqueUsername(message = "{uaa.constraints.username.UniqueUsername.message}")
	private String username;
	
	@Size(min = 8, max = 255)
	@NotNull
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{uaa.constraints.password.Pattern.message}")
	private String password;

	@OneToMany(mappedBy="admin", cascade=CascadeType.REMOVE)
	private List<Token> tokens;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return AuthorityUtils.createAuthorityList("Role_admin");
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}