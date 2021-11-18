import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Error = ({error}) => {
    return (
        <div>
        <Alert variant="danger">{error}</Alert>
        </div>
    )
}

export default Error
