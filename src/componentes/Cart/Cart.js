import React from 'react';
// import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
    // let total =0 ;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price * product.quantity;

    // }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order:{cart.length}</p>
            <p>Product Price:{formateNumber(total)}</p>
            <p>
                <smal>Shipping Cost:{shipping}</smal>
            </p>
            <p><small>Tax + VAT:{formateNumber(tax)}</small></p>
            <p>Total Price:{grandTotal}</p>
            <br/>
            {/* <Link to='/review'>
                <button className="main-button">Review Order</button>
            </Link> */}
            {
                props.children
            }
        </div>
    );
};

export default Cart;