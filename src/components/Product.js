import React from "react";
import { Link } from "react-router-dom";
import DATA from "../components/DATA";


const Product = () => {
  const CardItem = ({item}) => {
    // console.log(item.img)
    return (
      <div className="card" key={item.id} >
        <img src={item.img} className="card-img-top"  alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">
            ${item.price}
          </p>
          <Link to={`/product/${item.id}`} className="btn btn-outline-primary">
            Buy Now
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5>">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
          <div className="container">
            <div className="row d-flex justify-content-around">
              {DATA.map((item,index)=> <CardItem key={index} item={item}/>)}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
