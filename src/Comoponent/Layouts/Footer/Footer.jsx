import React from "react";
import './Footer.styles.css'

const Footer = ()  => {
    return (
      <div className="footer-container">
            <div className="container">
                <h2>For Any Inquiries Feel Free To Reach Out</h2>

                <form className="footer-form">
                    <div className="form-groups">
                        <label htmlFor= 'name' className="form-label">Name:</label>
                        <input type="text" id='name'className="form-input" placeholder="Enter Your Name"/>
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id='eamil'className="form-input" placeholder="Enter Your Email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">query</label>
                        <textarea className="form-input" id='query'placeholder="Enter Your Inquiry">

                        </textarea>
                        
                    </div>
                    <div className="form-group">

                        <button type="submit" className="form-submit">Submit</button>
                    </div>
                </form>
                <p>&copy; 2024 The EastAfrican Literature. All Rights Reserved</p>
            </div>
      </div>
    );
  }
  
  export default Footer;