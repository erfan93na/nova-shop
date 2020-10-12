import React, {Component} from 'react';
import Product from "./Product";
import {Link} from "react-router-dom"
class Products extends React.Component {
    constructor() {
        super();
    }
    render() {
let products= this.props.products;
        return (<>
    <ul className="products" id="prods">{products.map(product=><Product key={product._id} product={product}/>)}</ul>
         <Link to="/nova-shop/mobilecart">   <button id="basket">Checkout</button></Link></>
        );
    }
}

export default Products;
