import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h1> About Us</h1>
            <p className="lead">
              Shoppers Stop is home to a multitude of leading  international and national brands for apparels, fragrances, accessories, cosmetics,
              footwear, home décor and furnishings catering to the needs of the
              entire family. We aspire to provide our customers a memorable
              international shopping experience. We are one of the largest chain
              of department stores across India. 
            </p>
            <p>
              Our Vision is “    To be an
              inspirational and trusted brand, transforming customers' lives
              through fashion and delightful shopping experience every time” 
            </p>
            <p>
              We have a team of professional associates who strive endlessly to
              provide the best shopping experience to each of our customers. We
              have adopted a new philosophy of "Start Something New" to give
              retail a new dimension and innovation is our key driver to attain
              excellence in customer service
            </p>
            <p>
            

Whether you shop online or in store or any of the leading third party marketplaces you get the same experience in terms of merchandise, price & service.
<br/>

Shopping on our website is 100% safe and secure as we do not store complete details or payment information of your credit/debit card in our system. This is information is directly transmitted securely to the bank for payment processing. However, caution must always be taken by the customer while making transactions on any online venue.

We assort the collection from the best brands, trends, colours, fabrics, patterns to bring you a deep fashion selection wide across Men, Women, Kids, Fashion Accessories, and Home categories.

At Shoppers Stop we follow a policy that is – "We are responsible for what we sell". We offer free and easy returns on most of the merchandise bought online. If you are not completely satisfied with your purchase you can return the items via a courier pick up or exchange them in any of our stores across India.

We are responsible for what we sell and guarantee the originality of the products. All our products are sourced directly from the brands and carry brand warranty and genuineness certificate.

We offer free alteration at any Store for products purchased on online as well.

We provide the facility of express pick up service at the store. You can shop online and collect your order from the nearest or preferred Shoppers Stop store as per your convenience.

We offer personal shopper service with prior appointment at our store. You can avail the assistance of personal shoppers who are experts to guide you to shop in an exclusive lounge at the store.

We also provide Personal Shopper At Home service and you can shop from the comforts of your home with prior appointment with assistance from our personal shoppers.

We provide personalized shopping assistance by following our Style Hub which is curated with latest fashion trends and suggestions.
            </p>
            <Link to="/contact" className="btn btn-outline-primary" >Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
