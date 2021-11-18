import React, { useState } from "react";
import {useDispatch, useSelector } from 'react-redux'
import {registerNewUser}  from '../actions/userAction'
import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";


const Register = () => {

  const registerState = useSelector(state=>state.registerNewUserReducer)

  const {loading, error, success} = registerState
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch = useDispatch()

  const register = (e) => {
        e.preventDefault()
    const user = {
    name : name,
    email : email,
    password : password
    }

    if(password==confirm){
    dispatch(registerNewUser(user))
    }
   else {
     alert('passwords do not match')
   }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5} cardbody p={4} style={{marginTop: '150px'}}>
         
         <div className="register">
            <h2>Registration Form</h2>

            {loading && (<Loader />)}
            {error && (<Error error='Email Address is already taken'/>)}
            {success && (<Success success='Registration Successful' />)}
            
            <form onSubmit={register}>
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
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
                
              }}
            />
            <input
              type="password"
              placeholder="Confirm-Password"
              className="form-control"
              value={confirm}
              required
              onChange={(e) => {
                setConfirm(e.target.value);
                
              }}
            />
            <br />
            <br />
            <Button type='submit' className="mb-4">REGISTER</Button>
            </form>
            <a href="/login" style={{textDecoration:'none'}}>CLICK HERE TO LOGIN IN</a>
          </div>
        
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
