package com.max.crud3.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.crud3.Models.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {

}
