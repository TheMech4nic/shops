import React from 'react'
import { Link } from 'react-router-dom'

const Cartbtn = () => {
  return (
    <>
        <Link to='/cart' className='btn btn-outlinr-primary ms-2'>
            <span className='fa fa-shoping-cart me-1'></span>Cart (0)
        </Link>
    </>
  )
}

export default Cartbtn