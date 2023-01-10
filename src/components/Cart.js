import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart)
    const handleRemove = (productID) => {
        dispatch(remove(productID))
    };
    
  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
            {products.map((product) =>(
                <div className='card' >
                    <img className='card-img-top' src={product.img} />
                    <h5 className="card-title">{product.title}</h5>
                    <h5 className="lead">{product.price}</h5>
                    <button className='btn btn-outline-primary' onClick={() => handleRemove(product.id)}>Remove</button>
                </div>
            ))
                
            }
        </div>
    </div>
  )
}

export default Cart


