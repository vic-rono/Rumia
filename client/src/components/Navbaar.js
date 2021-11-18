import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { logoutUser } from "../actions/userAction";

function Navbaar() {
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rumia</Navbar.Brand>

          {currentUser ? (
            <Nav>
              <DropdownButton
                id="dropdown-basic-button"
                title={currentUser.name}
              >
                <Dropdown.Item href="profile">Profile</Dropdown.Item>
                <Dropdown.Item href="orders">Orders</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout
                </Dropdown.Item>
              </DropdownButton>

              <Nav.Link className="mr-auto" href="/cart">
                <MdShoppingCart />
              </Nav.Link>
              <Nav.Link className="auto">{cartItems.length}</Nav.Link>
            </Nav>
          ) : (
            <Nav.Link className="mr-auto" href="/login">
              Login
            </Nav.Link>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Navbaar;
