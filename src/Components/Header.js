import React, {Component} from 'react';
import {Link,NavLink} from "react-router-dom";

function Header  () {
        return (
            <header>
                <nav><Link to="/nova-shop" className="title"><img id="brandimg" src="images/brand.png"/></Link>
                <ul className="nav">
                    <NavLink to="/nova-shop/sales" activeClassName="active">Start Shopping!</NavLink>

                    <NavLink to="/nova-shop/about" activeClassName="active">About</NavLink>

                    <NavLink to="/nova-shop/contact" activeClassName="active">Contact Us</NavLink>


                </ul></nav>

            </header>
        );

}

export default Header;