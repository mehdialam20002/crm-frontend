
import React from "react";
import {useState} from "react";


export default function ContactUs() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
}); 

  return (
    <>

    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label>
          Name:
          <input type="text"  name="name" required />        
        </label>        
        <label>
          Email:
          <input type="email" name="email" required />  
        </label>    
        <label>     
            Message:    
            <textarea name="message" required></textarea>       

        </label>        
        <button type="submit">Submit</button>
      </form>
    </div>  

    </>
    )};