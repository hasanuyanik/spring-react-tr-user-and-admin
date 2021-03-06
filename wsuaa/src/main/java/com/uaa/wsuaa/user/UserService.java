package com.uaa.wsuaa.user;

import java.io.IOException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.uaa.wsuaa.error.NotFoundException;
import com.uaa.wsuaa.file.FileService;
import com.uaa.wsuaa.user.vm.UserUpdateVM;

@Service
public class UserService {
	UserRepository userRepository;
	PasswordEncoder passwordEncoder;
	FileService fileService;
	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, FileService fileService) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;	
		this.fileService = fileService;	
	}

	public void save(User user) {
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);		
	}

	public Page<User> getUsers(Pageable page){
		return userRepository.findAll(page);
	}

	public User getByUsername(String username) {
		User inDB =  userRepository.findByUsername(username);
		if(inDB == null) {
			throw new NotFoundException();
		}
		return inDB;
	}

	public User updateUser(String username, UserUpdateVM updatedUser) {
		User inDB = getByUsername(username);
		inDB.setDisplayName(updatedUser.getDisplayName());
		if(updatedUser.getImage() != null) {
			String oldImageName = inDB.getImage();
			try {
				String storedFileName = fileService.writeBase64EncodedStringToFile(updatedUser.getImage());
				inDB.setImage(storedFileName);
				fileService.deleteFile(oldImageName);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return userRepository.save(inDB);
	}

	public void deleteUser(String username) {
		User inDB = userRepository.findByUsername(username);
		fileService.deleteFile(inDB.getImage());
		//fileService.deleteAllStoredFilesForUser(inDB);
		userRepository.delete(inDB);
	}

	
}
