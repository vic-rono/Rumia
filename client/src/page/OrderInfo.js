import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Container, Row, Col } from "react-bootstrap";

const OrderInfo = ({ match }) => {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.getOrderByIdReducer);

  const { order, loading, error } = orderState;
  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);
  
  return (
    <Container>
      {error && <Error error="Something Went Wrong" />}
      {loading && <Loader />}
      {order && (
        <div>
          <Row md={5} className="row justify-content-center">
            <Col md={5} className="card">
              <h2>Items In Your Order</h2>
              <br />
              {order.orderItems.map((item) => {
                  return (
                    <div className="orderitem">
                      <h1>{item.name}</h1>
                      <h1>
                        Quantity: <b>{item.quantity}</b>
                      </h1>
                      <h1>
                        Price: {item.quantity} * {item.price} = {" "}
                        {item.price * item.quantity}
                      </h1>
                      <hr />
                    </div>
                  );
                })}
            </Col>
            <Col md={5} style={{ textAlign: "right" }}>
              <h1>Order Details</h1>
              <hr />
              <h3>Order ID: {order._id}</h3>
              <h3>Total Amount: {order.orderAmount}</h3>
              <h3>Date Of Order: {order.createdAt.substring(0,10)}</h3>
              <h3>Transaction ID {order.transactionId}</h3>

              {order.isDelivered ? (
                <h3>Order Delivered</h3>
              ) : (
                <h3>Order Placed</h3>
              )}
            </Col>
            <Col>
              <h2>Shipping Details</h2>
              <hr />
              <h1 style={{ textAlign:"right"}}>
                Address: <b>{order.shippingAddress.address}</b>
              </h1>
              <h1 style={{textAlign:"right"}}>
                City: <b>{order.shippingAddress.city}</b>
              </h1>
              <h1 style={{textAlign:"right"}}>
                Country: <b>{order.shippingAddress.country}</b>
              </h1>
            </Col>
          </Row>
        </div>
      )}
      <hr />

      <Row className="justify-content-center">
        <Col md={10}>
          <h1 style={{ textAlign: "right" }}>
            <b>Terms and Conditions</b>
          </h1>
          <h2>Good once sold are non-refundable</h2>
          <h2>Warranty may vary for each item depending on the manufacturer</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderInfo;
