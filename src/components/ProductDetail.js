import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DATA from './DATA';
import { useDispatch } from 'react-redux';
import { add, remove } from '../store/cartSlice';


const ProductDetail = () => {
    const [cartBtn, setcartBtn] = useState("Add to cart");
    const proid = useParams();
    const proDetails = DATA.filter(x=>x.id == proid.id);
    const product = proDetails[0];
    const dispatch = useDispatch()
    let sel_pro = [];
    const handleCart = (product) =>{
        if(cartBtn === "Add to cart"){
            dispatch(add(product))
            sel_pro.push(localStorage.setItem('Selected_Product', JSON.stringify(product)))
            setcartBtn("Remove from cart")
        }else{
            dispatch(remove(product.id))
            setcartBtn("Add to cart")
        }

    }
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div  className='product col-md-6'>
                    <img src={product.img} alt={product.title} width="350px"/>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr />
                    <h2 className='my-4'>{product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-5'>
                        {cartBtn}
                    </button>
                </div>
            </div> 
        </div>
    </> 
  )
}

export default ProductDetail