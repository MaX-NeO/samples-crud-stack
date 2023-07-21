package com.max.appserver.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.appserver.Models.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {

}
