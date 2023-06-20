import React from 'react'
import Nav from '../../../homePage/Nav'
import "./Pay.css"
import GQR from "../../../assets/qr.png"
import PQR from "../../../assets/pqr.png"
import ReCAPTCHA from "react-google-recaptcha";
function Pay() {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <>
    <Nav/>
    <div className="pay-container">
        <div className="pay-content">
            <div className="qr-content">
               <h2>Payment Here</h2>
                <div className="qr">
                    <img src={GQR} alt="" />
                    <p>Google Pay <span>$12.56</span></p>
                </div>
                <div className="qr">
                    <img src={PQR} alt="" />
                    <p>Paytm <span>$12.56</span></p>
                </div>
             </div>
             <div className="pcard-content">
                <h1>Pay with card</h1>
                <div className="email">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Please Enter your Email'/>
                </div>
                <div className="card-info">
                    <h3>Card Information</h3>
                    <input type="text" placeholder='1234 1234 1234 1234'/>
                    <div className="card-info1">
                        <input type="text" placeholder='MM / YY'/>
                        <input type="text" placeholder='CVC'/>
                    </div>
                </div>
                <div className="card-name">
                    <h3>Name on card</h3>
                    <input type="text" placeholder='Please Enter Your Name'/>
                </div>
                <div className="card-country">
                   <p>Country</p> 
                    <select name="" id="">
                        <option value="">India </option>
                        <option value="">Pakistan </option>
                        <option value="">US </option>
                        <option value="">Canada </option>
                    </select>
                </div>
                <div className='money'>
                    <p>$13.5</p>
                </div> <br/>
                <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange} className="rec"
        />
                <button>Submit</button>
             </div>

        </div>
    </div>
      
    </>
  )
}

export default Pay
