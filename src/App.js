import React,{useState,useReducer} from "react";
import './Styles/style.scss';
import data from "./data";
import Products from "./Components/Products";
import Filters from "./Components/Filters";
import Cart from "./Components/Cart";
import {cartReducer} from "./Components/cartReducer";

export const CartContext=React.createContext()

function App  () {
const [cartItems,dispatch]=useReducer(cartReducer,[])
 const [size,setSize]=useState("");
    const [sort,setSort]=useState("");


    const handleOrderChange=function(e){
          const sort=e.target.value
        setSort(sort)

    }
  const  handleSizeChange=function(e){
        const size=e.target.value

        setSize(size)
    }

    const products=data.products
        .filter((item )=>(size==="")?{}:item["availableSizes"].indexOf(size.toUpperCase())!=-1)
        .sort(function(a,b){return (sort==="highest")?(b.price-a.price):
            (sort=="lowest")?(a.price-b.price):a["_id"].slice(-1)-b["_id"].slice(-1)})
    return (
          <div className="grid-container">
                <header>
                      <a href="#">Nova Shop</a>
                </header>
              <CartContext.Provider value={[cartItems,dispatch]}>  <main><div className="content">
                    <div className="main">
                        <Filters count={products.length} handleOrderChange={handleOrderChange} handleSizeChange={handleSizeChange}/>
                        <Products products={products}/></div>
                    <div className="sidebar">
                        <Cart/>
                    </div>
                </div>
              </main></CartContext.Provider>
                <footer>Built with React</footer>
          </div>
      )



}

export default App