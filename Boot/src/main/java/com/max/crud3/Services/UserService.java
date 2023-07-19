package com.max.crud3.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.crud3.Models.User;
import com.max.crud3.Repos.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo urepo;
	
	public List<User> getUser() {
		return urepo.findAll();
	}
	public User addUser(User user) {
		return urepo.save(user);
	}
	
	public User editUser(Long id, User user) {
		User xuser = urepo.findById(id).orElse(null);
		if(xuser !=null) {
			xuser.setEmail(user.getEmail());
			xuser.setName(user.getName());
			xuser.setPhone(user.getPhone());
			xuser.setPassword(user.getPassword());
			return urepo.saveAndFlush(xuser);
		}
		else {
			return null;
		}
	}
	
	public String deleteUser(Long id) {
		User xuser = urepo.findById(id).orElse(null);
		
		if(xuser !=null) {
			urepo.deleteById(id);
			return "user deleted"+ id;
		}
		else {
			return "invalid userID";
		}
		
	}
}
