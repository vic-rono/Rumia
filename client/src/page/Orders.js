import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector}  from 'react-redux'
import { Container, Row, Col, Table} from 'react-bootstrap'
import { getOrdersByUserId} from '../actions/orderActions'

import Loader from "../components/Loader"
import Error from "../components/Error"
import { Link } from 'react-router-dom'

const Orders = () => {
    
    const orderState =useSelector(state=>state.getOrdersByUserIdReducer)

    const { orders, error, loading } = orderState
    const dispatch = useDispatch()
    useEffect(()=>{
    if(localStorage.getItem('currentUser')){
    dispatch(getOrdersByUserId())
    } else {
        window.location.href='/login'
    }
    },[dispatch])
    return (
        <Container>
            <Row className="row justify-content-center mt-5">
            <Col md={8}>
            <h2>MY ORDERS</h2>
            <Table>
                <thead>
                    
                    <tr>
                        <th>Order ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody>
                        {loading && (<Loader />)}
                        {orders && (orders.map(order=>{
                            return <tr onClick={()=>window.location=`/orderinfo/${order._id}`}>
                            
                                <td>{order._id}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>{order.transactionId}</td>
                                <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>
                                
                            </tr>
                        }))}
                        {error && (<Error error='Something Went Wrong' />)}
                        </tbody>
            </Table>
            </Col>
            </Row>
        </Container>
    )
}

export default Orders
