import React, {Component} from 'react';
import Product from "./Product";
class Products extends React.Component {
    constructor() {
        super();
    }
    render() {
let products= this.props.products;
        return (
    <ul className="products" id="prods">{products.map(product=><Product key={product._id} product={product}/>)}</ul>
        );
    }
}

export default Products;
