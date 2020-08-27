import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;


    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total = total + Number(item.price);
    }

    const formatNumber = num => {
        const totalRound = num.toFixed(2)
        return totalRound;
    }


    return (
        <div>
            <h4 className="order">Order Summary</h4>
            <p className="order">Items ordered: {cart.length}</p>
            <br />
            <h3 style={{ color: "brown" }}>Total Price: ${formatNumber(total)}</h3>
        </div>
    );
};

export default Cart;