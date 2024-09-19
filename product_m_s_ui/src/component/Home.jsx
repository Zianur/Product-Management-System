import React, { useEffect, useState } from "react";
import ProductService from "../service/product_service";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState([]);

  const [msg, setMsg] = useState("");

  //for getting data when page loads
  useEffect(() => {

    init();
   
  }, []); //this array symbol is given to stop the loop of fetching data

 
  const init = () => {
    ProductService.getAllProduct()
    .then((res) => {
      // console.log(res.data);
      setProductList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  
  const deleteProduct = (id) => {
    ProductService.deleteProduct(id)
      .then((res) => {
        setMsg("Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Product List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>
              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">SI No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.productDescription}</td>
                        <td>{p.productPrice}</td>
                        <td>{p.status}</td>
                        <td>
                          <Link to={"editProduct/"+p.id} className="btn btn-sm btn-primary m-1">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger m-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
