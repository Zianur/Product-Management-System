package com.ztech.product_management_backend.repository;

import com.ztech.product_management_backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
