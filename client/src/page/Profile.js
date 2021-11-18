import React ,{useState, useEffect} from'react'
import { Row, Col,  Container, Button } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux"
import { updateUser } from '../actions/userAction'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'



const Profile = () => {
 
    const loginState = useSelector(state => state.loginReducer)
    const updateUserState = useSelector(state =>state.updateReducer)
    const { loading, success, error } = updateUserState
    const currentUser = loginState.currentUser
    const dispatch = useDispatch()
    
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] =  useState(currentUser.email)
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
  
    const update = (e) =>{

    e.preventDefault()
    
      if (password == confirm) {
      const updateduser ={
        name: name,
        email: email,
        password: password
        }

         dispatch(updateUser(currentUser._id, updateduser))
     } else {
         alert('Password Do Not Match')
     }
    }
    return (
        <div>
        <Container>
        <Row className="justify-content-center">
          <Col md={5} cardbody p={4} style={{marginTop: '150px'}}>
           
           <div className="register">
              <h2>UPDATE CREDENTIALS</h2>
  
              {loading && (<Loader />)}
              {error && (<Error error='ERROR!'/>)}
              {success && (<Success success='Your credentials updated successfully, Login Again' />)}
              
              <form onSubmit={update}>
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
              <Button type='submit' className="mb-4">UPDATE</Button>
              </form>
              
            </div>
          
          </Col>
        </Row>
      </Container>
      </div>
    )
}

export default Profile
