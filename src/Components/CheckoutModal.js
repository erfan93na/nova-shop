import React, {Component,useState} from 'react';
import Modal from "react-modal";
import CustomerInfo from "./CustomerInfo";
import {BrowserRouter as Router}  from "react-router-dom";

export const CustomerInfoContext=React.createContext();



export function CheckoutModal (props){
    const [contact,setContact]=useState({})
    const customStyles={content:{
        width:"40%",
        height:"70%",
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
        padding:"2rem",
        }}

        return (
            <Modal style={customStyles} isOpen={props.checkOpen}>
                <CustomerInfoContext.Provider value={[contact,setContact]}>
                    <button style={{position:"absolute",top:"0.5rem",right:"0.5rem"}} onClick={props.closeModal}>X</button>
                    <Router>
                    <CustomerInfo closeModal={props.closeModal}/>
                    </Router>
                </CustomerInfoContext.Provider>

            </Modal>
        );

}

