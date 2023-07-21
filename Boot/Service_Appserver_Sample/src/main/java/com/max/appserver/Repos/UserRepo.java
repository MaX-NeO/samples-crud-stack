package com.max.appserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.appserver.Models.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
