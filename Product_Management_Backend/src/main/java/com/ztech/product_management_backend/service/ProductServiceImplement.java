package com.ztech.product_management_backend.service;

import com.ztech.product_management_backend.model.Product;
import com.ztech.product_management_backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImplement implements ProductServiceInterface {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public String deleteProduct(Integer id) {

        Product product = productRepository.findById(id).get();
        if (product != null) {
            productRepository.delete(product);
            return "Product deleted successfully";
        }

        return "Something went wrong";


    }

    //don't need it hibernate automatically understands to edit when we send a product with id

//    @Override
//    public Product updateProduct(Product product) {
//        return productRepository.save(product);
//    }


}
