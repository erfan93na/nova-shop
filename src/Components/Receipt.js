import React, {Component, useContext} from 'react';
import {CartContext} from "../App";
import {CustomerInfoContext} from "./CheckoutModal";


function Receipt  () {
     const [cartItems]=useContext(CartContext)
    const [contact]=useContext(CustomerInfoContext)
    const sum=function () {

        return          cartItems.reduce(function (value,item) {
            return  value+item.price*item.count
        },0)
    }
        return (<>
<ul className="cartList" style={{maxHeight:"60%",borderStyle:"",overflow:"auto"}}>
    {cartItems.map(item=> { return (<li className="cartItem" >
        <div style={{"fontWeight":"bold"}}>{item.title}</div>
        <div>{item.price} $</div>
        <div className="itemCount">Count: {item.count}</div>
    </li>)})}

</ul>
            <strong>Total Sum: {(sum().toFixed(2))} $</strong>
                <div className="checkoutCont" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
                    <div>Name: {contact.fname}</div>
                    <div>Address: {contact.address}</div>
                    <div>Email: {contact.email}</div>
                    <div>Additional Info: {contact.info}</div>
                </div>
            </>

        );

}

export default Receipt;