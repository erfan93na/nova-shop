import React, {Component, useContext, useState} from 'react';
import CartItems from "./CartItems";
import {CartContext} from "../App";
import {CheckoutModal} from "./CheckoutModal"
import CustomerInfo from "./CustomerInfo";

function Cart (){
        const [cartItems]=useContext(CartContext)
        const sum=function () {

       return          cartItems.reduce(function (value,item) {
return  value+item.price*item.count
                },0)
         }
    const [checkOpen,changeModal]=useState(false)
    const openModal=function () {
changeModal(true)
    }
    const closeModal=function () {
        changeModal(false)
    }

        return (
            <div className="mainCart">
                <CartItems/>

                    <div>{(sum()==0)?"Your cart is empty.":<div><strong>Total Sum: {(sum().toFixed(2))} $</strong><button onClick={openModal} className="checkoutbtn">Checkout</button></div>}</div>
                <CheckoutModal checkOpen={checkOpen} closeModal={closeModal}/>
            </div>
        );

}

export default Cart;