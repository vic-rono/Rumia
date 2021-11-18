import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import { getProductById } from "../actions/productAction"
import { addToCart } from "../actions/cartActions"
import Loader from "../components/Loader";
import Error from "../components/Error"
import Review from "../components/Review";

function Productdesc({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1)

  const getProductByIdState = useSelector(
  state => state.getProductByIdReducer
  );

  const { product, loading, error } = getProductByIdState;

  const addtocart = () => {
    dispatch(addToCart(product, quantity))
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <Container>
      {loading ? (
      <Loader />
      ) : error ? (
        <Error error="Something Went Wrong.."/>
      ) : (
        <Row>
          <Col md={6} style={{ textAlign: "left" }}>
            <div className="card-body p-2 m-2">
              <h1>{product.name}</h1>
              <img
                src={product.image}
                alt="product"
                className="img-fluid m-3 bigimg"
              />
              <p>{product.description}</p>
            </div>
          </Col>

          <Col md={6} style={{ textAlign: "left" }}>
            <div className="m-2">
              <h1>Price: {product.price}</h1>
              <hr />
              <h1>Select quantity</h1>
              <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                {[...Array(product.countInStock).keys()].map((i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <Button variant="primary" onClick={addtocart}>ADD TO CART</Button>
            </div>
            <br />
            <h1>Your Review</h1>
            <Review product={product} />
            <br />

          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Productdesc;
