import React from "react";
import './Login.styles.css';
import Logbgimg from '../../../Assets-2/Log-bg.jpg';
import NavBar from "../../Layouts/Navbar/NavBar";


const Login = ()  => {
    return (
      <React.Fragment>
      <NavBar darktheme={true}/>
      <section className="sign-container">
        <div className="image-container">
            <img src={Logbgimg} alt="sign-background" />
        </div>
        <div className="login-content-container">
          <div className="container">

            
          <div className="content-wrapper">
            <h2>Login</h2>
              <p>Log in to your account with an email and password.</p>

              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input type='email' className="form-input" placeholder="Enter your email"/>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type='password' className="form-input" placeholder="Enter your password"/>
                </div>

                <div className="form-group">
                  <input type='submit' className="button-primary" value='Login'/>
                </div>
              </form>
          </div>
          </div>
        </div>
    
      </section>
      </React.Fragment>
    );
  }
  
  export default Login;