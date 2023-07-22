package com.max.appserver.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.appserver.Models.Admin;
import com.max.appserver.Repos.AdminRepo;

@Service
public class AdminService {
	@Autowired
	private AdminRepo repo;
	
	// Admin Login
		public String Loginadmin(String email, String password) {
			Admin adminx = repo.findByEmail(email);
			if (adminx == null) {
				return "Invalid User !";
			} else {
				if (adminx.getPassword().equals(password)) {
					return "Login Successful !";
				} else {
					return "Invalid Password";
				}
			}
		}
	// Add Admin
		public Admin addAdmin(Admin admin) {
			return repo.save(admin);
		}
	
}
