import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {

    const { title, banner, author, price, hours, lecture } = props.product;
    return (
        <div className="product">
            <div>
                <img src={banner} alt="" />
            </div>
            <div>
                <h4 className="product-name">{title}</h4>
                <p><small>by: {author}</small></p>
                <h3>${price}</h3>
                <p>{hours} total hours - {lecture} lectures</p>
                <button onClick={() => props.handleAddProduct(props.product)} className="main-button"> <FontAwesomeIcon icon={faMouse} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;