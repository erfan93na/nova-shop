import React, {useState, useReducer} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './Styles/style.scss';
import data from "./data";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Filters from "./Components/Filters";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Contact from "./Components/Contact";

import {cartReducer} from "./Components/cartReducer";

export const CartContext = React.createContext()

function App() {
    const [cartItems, dispatch] = useReducer(cartReducer, [])
    const [size, setSize] = useState("");
    const [sort, setSort] = useState("");


    const handleOrderChange = function (e) {
        const sort = e.target.value
        setSort(sort)

    }
    const handleSizeChange = function (e) {
        const size = e.target.value

        setSize(size)
    }


    const products = data.products
        .filter((item) => (size === "") ? {} : item["availableSizes"].indexOf(size.toUpperCase()) != -1)
        .sort(function (a, b) {
            return (sort === "highest") ? (b.price - a.price) :
                (sort == "lowest") ? (a.price - b.price) : a["_id"].slice(-1) - b["_id"].slice(-1)
        })
    return (<Router>
            <div className="grid-container">
                <Header/>
                <CartContext.Provider value={[cartItems, dispatch]}>
                    <main>
                        <div className="content">
                                <Route exact path="/nova-shop"><Link to="/nova-shop/sales">
                                    <div id="landing" className="mainc"></div>
                                </Link></Route>
                                <Route  exact path="/nova-shop/sales">
                                    <div className="main">
                                        <Filters count={products.length} handleOrderChange={handleOrderChange}
                                                 handleSizeChange={handleSizeChange}/>
                                        <Products products={products}/></div>
                                    <div className="sidebar">
                                        <Cart/>
                                    </div>
                                </Route>
                                <Route exact  path="/nova-shop/about"><About/></Route>
                            <Route exact  path="/nova-shop/contact"><Contact/></Route>

                        </div>
                    </main>
                </CartContext.Provider>
                <footer>Built with React.</footer>
            </div>
        </Router>
    )


}

export default App