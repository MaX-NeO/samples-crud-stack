package com.max.crud3.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.crud3.Models.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
