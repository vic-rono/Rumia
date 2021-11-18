import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <div className='mt-5' >
            <Spinner animation="border" style={{width: '100px' , height: '100px'}} />
        </div>
    )
}

export default Loader
