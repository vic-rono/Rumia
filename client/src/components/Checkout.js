import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'
import { Button } from 'react-bootstrap'

const Checkout = ({ amount }) => {
    
     const dispatch = useDispatch()
     const orderState = useSelector(state=>state.placeOrderReducer)

     const { loading, success, error} = orderState
    function tokenHandler(token){
    dispatch(placeOrder(token, amount))

    function validate(){
        if(!localStorage.getItem('currentUser')){
            window.location.href = '/login'
        }
    }
    }
    return (
        <div>

            {loading && (<Loader />)}
            {success && (<Success success='Order Placed Successfully' />)}
            {error && (<Error error='Something Went Wrong' />)}
            
            
            <StripeCheckout
            name="Rumia" 
            token={tokenHandler}
            amount={amount}
            currency='USD'
            shippingAddress
            stripeKey='pk_test_51IVEB6CCWmIObDCQSyJY3V8ktIKGOJ5mH39An1DHN3nMSEWFuuBvmZ2Pc3l7XDXj0Dc45GwxAXqdO6nzQ2hiHBiS00Vm66XZWS'
            >
                
                <Button size="lg">PAY NOW</Button>
            
            </StripeCheckout>
        </div>
    )
}

export default Checkout
