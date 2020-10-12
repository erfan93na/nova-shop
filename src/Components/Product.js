import React, {Component,useContext} from 'react';
import {CartContext} from "../App";
import Radium, {StyleRoot} from "radium"
import {fadeInUpBig} from "react-animations";

function Product (props){
    let product =props.product
    const [cartItems,dispatch]=useContext(CartContext)
    const handleAdd=function(){
dispatch({type:"Increment",payload:product})

    }


    return (
             <li className="product-row" ><a href={"#"+product._id}><img src={product.image}/>
             <p>{product.title}</p>
             <p>{product.price+" $"}</p></a><button onClick={handleAdd}>Add to Cart</button></li>

        );

}

export default Product;