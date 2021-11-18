import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { getAllProducts, deleteProduct } from '../actions/productAction'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'
import {MdDelete} from 'react-icons/md'
import { AiFillEdit} from 'react-icons/ai'



const Productslist = () => {

    const dispatch = useDispatch()
    const getAllProductsState = useSelector((state) => state.getAllProductsReducer)

    const { products, loading, error} = getAllProductsState
    useEffect(()=> {
    dispatch(getAllProducts())
    }, [])
    return (
        <div>
            <h2>Products List</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Product ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
           <tbody>
            {loading && (<Loader />)}
            {error && (<Error error='Something Went Wrong' />)}
            {products && (products.map(product=>{
                return <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.countInStock}</td>
                    <td>{product._id}</td>
                    <td>{<MdDelete   onClick={()=>{dispatch(deleteProduct(product._id))}} />} </td>
                    <Link to={`/admin/editproduct/${product._id}`}><AiFillEdit className='icon' /></Link>
                </tr>
                
            }))}
            </tbody>
             </Table>
        </div>
    )
}

export default Productslist

//onClick={()=>{dispatch(deleteProduct(product._id))}}