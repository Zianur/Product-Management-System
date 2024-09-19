import axios from "axios"

const API_URL = "http://localhost:8080"

class ProductService{

    saveProduct(product){
        return axios.post(API_URL+"/saveProduct",product)
    }


    getAllProduct(){
        return axios.get(API_URL+"/")
    }


    getProductById(id){
        return axios.get(API_URL+"/"+id)
    }

    deleteProduct(id){
        return axios.get(API_URL+"/deleteProduct/"+id)
    }


    updateProduct(product){
        return axios.post(API_URL+"/updateProduct/"+product.id,product)
    }





    
}

export default new ProductService