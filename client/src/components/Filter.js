import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productAction";

const Filter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="row justify-content-center mt-5 ml-2 mr-2">
        <Col md={3} className="mt-2">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search Products"
            className="form-control"
          />
        </Col>
        <Col md={3} className="mt-3">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </Col>
        <Col md={1} className="mt-3">
          <Button
            onClick={() => {
              dispatch(filterProducts(search, category));
            }}
          >
            FILTER
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
