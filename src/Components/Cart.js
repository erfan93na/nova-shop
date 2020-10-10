import React, {Component,useContext} from 'react';
import CartItems from "./CartItems";
import {CartContext} from "../App";

function Cart (){
        const [cartItems]=useContext(CartContext)
        const sum=function () {

       return          cartItems.reduce(function (value,item) {
return  value+item.price*item.count
                },0)
         }
        return (
            <div className="mainCart">
                <CartItems/>

                    <div>{(sum()==0)?"Your cart is empty.":<div><strong>Total Sum: {(sum().toFixed(2))} $</strong><button className="checkoutbtn">Checkout</button></div>}</div>
            </div>
        );

}

export default Cart;