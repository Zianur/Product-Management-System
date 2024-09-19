package com.ztech.product_management_backend.controller;

import com.ztech.product_management_backend.model.Product;
import com.ztech.product_management_backend.service.ProductServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {


    @Autowired
    private ProductServiceInterface productService;


    @PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {
        //@RequestBody converts json data into object of product to save it in database
        //this is called desearialization

        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllProducts() {
        //ResponseEntity object returns the response of the call
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById( @PathVariable Integer id) {
        //@PathVariable extracts values(id) from url to find the data by id

        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @GetMapping("/deleteProduct/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {

        return new ResponseEntity<>( productService.deleteProduct(id), HttpStatus.OK);
    }


    @PostMapping("/updateProduct/{id}")
    public ResponseEntity<?> updateProduct(@RequestBody Product product) {
        //we could have done the update with the saveProduct too
        //when we send a product with id Hibernate understands itself
        //that the product needs to be edited
        //we don't even need to write interface method and implement it

        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.OK);
    }









}
