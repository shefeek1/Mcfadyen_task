import React from 'react'
import './Footer.css'
import logo1 from '../../src/assets/logo.png'
import payment from '../assets/payment.svg'


function Footer() {
    return (
        <div className='footer mt-3'>
            <div className='container'>
              
                <div className='col'>
                   <img className='logo1' src={logo1}></img>
                   <p>Got Questions ? Call us</p>
                   <p>1-800-532-4427</p>
                   <p>Contact info 5449 Endeavour Ct. Moorpark, CA 93021</p>
                   
                </div>
                <div className='col'>
                    <h3>COMPANY</h3>
                   <p>About Us</p>
                   <p>Buyer</p>
                   <p>Sellers</p>
                   <p>Contact Us</p>
                   
                </div>
                <div className='col'>
                  <h3>INFORMATION</h3>
                   <p>Exchange and Returns Policy</p>
                   <p>Terms and Conditions</p>
                   <p>Privacy Policy</p>
                   <p>FAQ</p>
                   
                </div>
                <div className='col'>
                  <h3>PAYMENT METHODS</h3>
                  <img className='payment' src={payment}></img>
                   <p>SIGN UP FOR EMAIL</p>
                   <p>Be the first to hear about promotions.</p>
                   
                </div>
                </div>
          
        </div>
    )
}

export default Footer