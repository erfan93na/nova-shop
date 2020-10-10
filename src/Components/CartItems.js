import React, {Component, useContext} from 'react';
import CartItem from "./CartItem";
import {CartContext} from "../App";

function CartItems() {
    const [cartItems]=useContext(CartContext)
        return (
            <ul className="cartList">
                {cartItems.map(item=><CartItem key={item._id} item={item}/>)}
            </ul>
        );

}

export default CartItems;