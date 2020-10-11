import React, {Component, useContext, useState} from 'react';
import {CustomerInfoContext} from "./CheckoutModal";
import {Route,withRouter} from "react-router-dom";
import Receipt from "./Receipt"

function CustomerInfo  (props) {
        const [contact,setContact]=useContext(CustomerInfoContext)
        const [fname,setFname]=useState("")
        const [address,setAdd]=useState("")
        const [email,setEm]=useState("")
        const [info,setInf]=useState("")

        const handleFn=function (e) {

setFname(e.target.value)
                console.log(fname)
        }
        const handleAdd=function (e) {
                setAdd(e.target.value)
        }
        const handleEm=function (e) {
                setEm(e.target.value)
        }
        const handleInf=function (e) {
                setInf(e.target.value)
        }
const handleSubmit=function (e) {
e.preventDefault();
setContact({fname,address,email,info})
        props.history.push("/thanks")

}
        return (<>
            <Route exact path="/nova-shop">
                    <form className="customerInfo" onSubmit={handleSubmit}>
                            <input type="text" name="fullname" placeholder="Enter Full Name" required onChange={handleFn} />
                            <input type="text" name="address" placeholder="Enter Address" required onChange={handleAdd}  />
                            <input type="email" name="email" placeholder="Enter email"  required onChange={handleEm} />
                            <textarea name="info" placeholder="Additional Information..." onChange={handleInf} ></textarea>
                            <input type="Submit"/><button onClick={props.closeModal}>Cancel</button>
                    </form>
            </Route>
                    <Route path="/nova-shop/thanks">
                            <Receipt/>
                    </Route>
</>
        );

}

export default withRouter(CustomerInfo);