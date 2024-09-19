package com.ztech.product_management_backend.service;

import com.ztech.product_management_backend.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductServiceInterface {

    public Product saveProduct(Product product);

    public List<Product> getAllProducts();

    public Product getProductById(Integer id);

    public String deleteProduct(Integer id);

    //don't need it hibernate automatically understands to edit when we send a product with id
//    public Product updateProduct(Product product);

}
