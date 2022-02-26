import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Link to='/'>
            <div style={{color: 'blue', textAlign: 'center'}}>
                Go home
            </div>
        </Link>

    )
}

export default NotFound