import React, {Component} from 'react';

function Product (props){
    let product =props.product
        return (
             <li className="product-row"><a href={"#"+product._id}><img src={product.image}/>
             <p>{product.title}</p>
             <p>{product.price+" $"}</p></a><button>Add to Cart</button></li>
        );

}

export default Product;