import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

const Cart = () => {
  const cartReducerState = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartReducerState;

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Container>
      <Row className="row mt-5 justify-content-center">
        <Col className="col-md-8 card-body">
          <h2 className="text-center m-5">MY CART</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addToCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <MdDelete
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <br />
          <h2>SUB-TOTAL : {subTotal} Ksh</h2>
          <br />
          <br />
          <Checkout amount={subTotal} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
