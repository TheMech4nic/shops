import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Cartbtn = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
        <Link to='/cart' className='btn btn-outlinr-primary ms-2'>
            <span className='fa fa-shoping-cart me-1'></span>Cart ({items.length})
        </Link>
    </>
  )
}

export default Cartbtn