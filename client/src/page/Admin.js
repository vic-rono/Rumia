import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'
import Userslist from './Userslist'
import Productslist from './Productslist'
import Edit from './Edit'
import Orderslist from './Orderslist'
import Addproduct from './Addproduct'

const Admin = () => {
    return (
        <Container>
            <Row className="row-justify-content-center mt-5">
            <Col md={10}>
            <ul className='admin'>
            <li><Link to='/admin/userslist' >UsersList</Link></li>
            <li><Link to='/admin/productslist' >ProductsList</Link></li>
            <li><Link to='/admin/addnewproduct' >Add New Product</Link></li>
            <li><Link to='/admin/orderslist' >Orderslist</Link></li>
            </ul>
            <Switch>
                <Route path='/admin/userslist' component={Userslist} />
                <Route path='/admin/productslist' component={Productslist} />
                <Route path='/admin/addnewproduct' component={Addproduct} />
                <Route path='/admin/orderslist' component={Orderslist} />
                <Route path='/admin/editproduct/:product' component={Edit} />
                
            </Switch>
            </Col>
            </Row>


        </Container>
    )
}

export default Admin
