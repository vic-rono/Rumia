import React, { useState, useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button } from "react-bootstrap";
import { loginUser } from "../actions/userAction";
import Loader from "../components/Loader";
import Error from "../components/Error"


const Login = () => {
  
  const loginReducer = useSelector(state=>state.loginReducer)
  const {loading, error} = loginReducer
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()

  const login = (e) => {
    e.preventDefault()
    const user = {
    email : email,
    password : password,
    }
    dispatch(loginUser(user))
}
  
useEffect(() => {
 if(localStorage.getItem('currentUser')){
   window.location='/'
 }
}, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5} cardbody p={4} style={{marginTop: '150px'}}>
         
         <div className="login">
            <h2>Login</h2>
            {error && (<Error error="Invalid Credentials" />)}
            {loading && (<Loader/>)}
            <form onSubmit={login}>
            <input
              type="text"
              placeholder="E-mail"
              className="form-control"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                
              }}
            />
            <input
              type="passsword"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
                
              }}
            />
            
            <br />
            <br />
            <Button type='submit' className="mb-4">LOGIN</Button>
            </form>
            <a href="/register" style={{textDecoration:'none'}}>CLICK HERE TO REGISTER</a>
          </div>
        
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
