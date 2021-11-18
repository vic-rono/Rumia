import axios from "axios";

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      console.log(res);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);

      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};

export const getProductById = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });

  axios
    .get("/api/products/getproductbyid", { productid })
    .then((res) => {
      console.log(res);
      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);

      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err });
    });
};

//action creator for getting  data from the back-end, in this case the products

export const filterProducts = (search, category) => (dispatch) => {
  let filteredProducts;
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      filteredProducts = res.data;
      if (search) {
        filteredProducts = res.data.filter((product) => {
          return product.name.toLowerCase().includes(search);
        });
        //logic for perfoming a search
      }

      if (category !== "all") {
        filteredProducts = res.data.filter((product) => {
          return product.category.toLowerCase().includes(category);
        });
      }

      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });

      //logic for sort
    })
    .catch((err) => {
      dispatch({ type: "GET_PRODCUTS_FAILED" });
    });
};

export const addProductReview = (review, productid) => (dispatch, getState) => {
  dispatch({ type: "ADD_PRODUCT_REVIEW_REQUEST" });
  const currentUser = getState().loginReducer.currentUser;

  axios
    .post("/api/products/addreview", { review, productid, currentUser })
    .then((res) => {
      console.log(res);
      dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS" });
      alert("Review Submitted Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED" });
    });
};

export const deleteProduct = (productid) => (dispatch, getState) => {
  dispatch({ type: "DELETE_PRODUCT_REQUEST" });

  axios
    .post("/api/products/deleteproduct", { productid })
    .then((res) => {
      dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data });
      alert("Product Deleted Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "DELETE_PRODUCT_FAILED", payload: err });
    });
};

export const addProduct = (product) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT_REQUEST" });

  axios
    .post("/api/products/addproduct", { product })
    .then((res) => {
      console.log(res);
      dispatch({ type: "ADD_PRODUCT_SUCCESS" });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "ADD_PRODUCT_FAILED" });
    });
};

export const updateProduct = (productid, updatedproduct) => (dispatch) => {
  dispatch({ type: "UPDATE_PRODUCT_REQUEST" });

  axios
    .post("/api/products/updateproduct", { productid, updatedproduct })
    .then((res) => {
      console.log(res);
      dispatch({ type: "UPDATE_PRODUCT_SUCCESS" });
      window.location.href = "/admin/productslist";
    })
    .catch((err) => {
      dispatch({ type: "UPDATE_PRODUCT_FAILED" });
    });
};
