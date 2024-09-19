import React, { useState } from "react";
import ProductService from "../service/product_service";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    status: "",
  });

  const [msg, setMsg] = useState("");

  //this method puts the values in product whenever there is a change to a particular attribute
  const handleChange = (e) => {
    //getting the value of the input using event(e)
    const value = e.target.value;
    //setting the new value to a new object keeping the unchanged value intact
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    //page will not refresh, page refresh is prevented
    e.preventDefault();

    ProductService.saveProduct(product)
      .then((res) => {
        console.log("product added successfully");
        setMsg("product added successfully");
        setProduct({
          productName: "",
          productDescription: "",
          productPrice: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="card col-6">
              <div className="card-header fs-3 text-center">Add Product</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              <div className="card-body">
                <form onSubmit={(e) => ProductRegister(e)}>
                  <div className="mb-3  d-flex flex-column">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-coontro"
                      onChange={(e) => handleChange(e)}
                      //needed for making input empty
                      value={product.productName}
                    />
                  </div>

                  <div className="mb-3  d-flex flex-column">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="productDescription"
                      className="form-coontro"
                      onChange={(e) => handleChange(e)}
                      //needed for making input empty
                      value={product.productDescription}
                    />
                  </div>

                  <div className="mb-3  d-flex flex-column">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="productPrice"
                      className="form-coontro"
                      onChange={(e) => handleChange(e)}
                      //needed for making input empty
                      value={product.productPrice}
                    />
                  </div>

                  <div className="mb-3  d-flex flex-column">
                    <label className="">Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-coontro"
                      onChange={(e) => handleChange(e)}
                      //needed for making input empty
                      value={product.status}
                    />
                  </div>

                  <button
                    onClick={(e) => ProductRegister(e)}
                    className="btn btn-primary col-md-12"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
