import React, { useEffect } from 'react';
import '/src/Css/Contact.Module.css';
const Contact = () => {

 
  return (
   
     <>
         <div className='footer' style={{backgroundColor:'#006400',color:'#01080fff'}}>
      
        <address className='footer-1'>

          <h2>India (IND), Nagpur</h2>
          <p>
            Greenary Street, Nagpur,<br />
            Maharashtra - 440026, India<br />
            Phone: +91 98765 43210<br />
            Email: contact@Greenary.in
          </p>
        </address>
       
        <div>
          <img src="src\images\Call.webp" alt="" className='call' />
        </div>
        <plaintext>Contact Us</plaintext>
         <img src="/src/images/flag.png" alt=""  className='india'/>

      </div>
     </>
    
  )
}

export default Contact;
