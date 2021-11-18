import React from "react";

import Product from "../components/Product";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

const Home = () => {
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );
  
  const { loading, products, error } = getAllProductsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center mt-5 ml-2 mr-2">
        {loading ? (
          <h1><Loader /></h1>
        ) : error ? (
          <Error error="Something Went Wrong...." />
        ) : (
          products.map(product => {
            return <div className="col-md-3 m-5 p-2 ">
                <Product product={product} />
              </div>
            
})
        )}
      </div>
    </div>
  );
}

export default Home;
