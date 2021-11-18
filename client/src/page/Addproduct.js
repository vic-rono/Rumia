import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { addProduct } from "../actions/productAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";


const Addproduct = () => {
  const addProductState = useSelector((state) => state.addProductReducer);

  const { success, loading, error} = addProductState;

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const addproduct = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      countInStock: countInStock,
      image: image,
      category,
      description: description,
    };
    dispatch(addProduct(product));
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
         
          {success && (<Success success="Product Added Sucessfully" />)}
          {loading && (<Loader />)}
          {error && (<Error error="Something Went Wrong" />)}

          <h2>Add Product</h2>
          <form onSubmit={addproduct}>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Price"
              className="form-control"
              value={price}
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Count"
              className="form-control"
              value={countInStock}
              required
              onChange={(e) => {
                setCountInStock(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Image"
              className="form-control"
              value={image}
              required
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Category"
              className="form-control"
              value={category}
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Description"
              className="form-control"
              value={description}
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <br />
            <br />
            <Button type="submit" className="mb-4">
              ADD PRODUCT
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Addproduct;
