package com.max.crud3.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.crud3.Models.User;
import com.max.crud3.Services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;
	
	
	@GetMapping("/get")
	public List<User> GetUser(){
		return service.getUser();
	}
	
	@PostMapping("/add")
	public User AddUser(@RequestBody User user) {
		return service.addUser(user);
	}
	@PutMapping("/edit/{id}")
	public User EditUser(@RequestBody User user,@PathVariable Long id) {
		return service.editUser(id, user);
	}
	@DeleteMapping("/delete/{id}")
	public String DeleteUser(@PathVariable Long id) {
		return service.deleteUser(id);
	}
	
}
