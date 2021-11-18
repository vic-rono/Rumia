import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'
import { getAllOrders } from '../actions/orderActions'

const Orderslist = () => {
    const dispatch = useDispatch()

    const getOrderState = useSelector(state =>state.getAllOrdersReducer)

    const {loading, error, orders } = getOrderState

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
    return (
        <div>
            {loading && (<Loader />)}
            {error && (<Error error='Something Went Wrong'/>)}
            <h1>Orderslist</h1>
            <Table className='table'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Email</th>
                        <th>User ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Transaction ID</th>
                        </tr>
                        </thead>
                        <tbody>
                            {orders && (orders.map(order=>{
                                return <tr onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>
                                    <td>{order._id}</td>
                                    <td>{order.email}</td>
                                    <td>{order.userid}</td>
                                    <td>{order.createdAt}</td>
                                    <td>{order.transactionId}</td>
                                    </tr>
                            }))}
                        </tbody>
                   
                
            </Table>
           
        </div>
    )
}

export default Orderslist
