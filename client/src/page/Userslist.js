import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, deleteUser } from '../actions/userAction'
import { Table } from 'react-bootstrap'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'
import {AiOutlineDelete} from 'react-icons/ai'


const Userslist = () => {

    const getAllUsersState = useSelector(state=>state.getAllUsersReducer)

    const { users, loading, error} = getAllUsersState
    const dispatch = useDispatch()

    useEffect(()=> {
    dispatch(getAllUsers())
    }, [])
    
    return (
        <div>
            <h2>Users List</h2>
            <Table>
                <thead>
                    <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {loading && (<Loader />)}
                        {error && (<Error error="Something Went Wrong" />)}
                        {users && (users.map(user=> {
                            return<tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{<AiOutlineDelete onClick={()=>{dispatch(deleteUser(user._id))}}/>} </td>
                            </tr>
                        }))}
                    </tbody>
               
            </Table>
        </div>
    )
}

export default Userslist
