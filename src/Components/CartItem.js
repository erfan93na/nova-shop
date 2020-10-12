import React, {Component,useContext} from 'react';
import {CartContext} from "../App";
import Radium, {StyleRoot} from "radium"
import {fadeInLeft} from "react-animations";
const styles={fadeInLeft:{animation:"x 1s",animationName:Radium.keyframes(fadeInLeft,"fd")}}

function CartItem (props){
        const item=props.item

        const [cartItems,dispatch]=useContext(CartContext)
        const handleAdd=function(){

dispatch({type:"Increment",payload:item})
        }
        const handleSub=function(){

                dispatch({type:"Decrement",payload:item})
        }
        const handleRemove=()=>{
                dispatch({type:"Remove",payload:item})

        }

        return (
            <StyleRoot>
            <li className="cartItem" style={styles.fadeInLeft}>
          <div className="cartItemLeft">      <div style={{"fontWeight":"bold"}}>{item.title}</div>
                <div>{item.price} $</div>
                <div className="itemCount">Count: {item.count}<div> <button onClick={handleAdd}>+</button>
                        <button onClick={handleSub}>-</button>
                    <button onClick={handleRemove}>X</button></div></div></div>

<div className="cartItemRight"><img src={item.image}/></div>

            </li></StyleRoot>
        );

}

export default CartItem;