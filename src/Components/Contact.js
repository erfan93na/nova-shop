import React, {Component, useState} from 'react';

function Contact  () {
    const [isSubmitted,setSubmit]=useState(false)
if (!isSubmitted) {
    var cont= <> <input type="text" required placeholder="Enter Name"/>
        <textarea required placeholder="Tell us what you think..."/>
        <input type="submit"/></>
}
else{
    var cont=<div>We will review your comment shortly, Thanks.</div>
}
      return (
            <div className="mainc" id="contact">
                <form className="cont" onSubmit={(event)=>{event.preventDefault();setSubmit(true)}}>
                    {cont}
                </form>
            </div>
        );

}

export default Contact;