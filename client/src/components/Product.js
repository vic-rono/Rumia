import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

function Product({ product }) {
  return (
    <div style={{ textAlign: "left" }} className="shadow p-3 mb-5 bg-white rounded">
      <Link to={`product/${product._id}`}>
        <img src={product.image} alt="product" className="img-fluid" />
        <h1>{product.name}</h1>
        <h1>Price: {product.price}</h1>
      </Link>
      <Rating name="disabled" value={product.rating} />
    </div>
  );
}


export default Product;
