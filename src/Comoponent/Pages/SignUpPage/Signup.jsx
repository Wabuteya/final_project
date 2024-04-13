import React,{useState} from "react";
import './Signup.styles.css';
import  Signbgimg from '../../../Assets-2/Sign-bg.jpg'; 
import NavBar from "../../Layouts/Navbar/NavBar";


const Signup = ()  => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const handlechange = (event) => {
    if(event.target.type === 'email') {
      setEmail(event.target.value);

    } else if (event.target.type === 'password'){
      setPassword(event.target.value);
    }

  }

  const handlesubmit = (event) => {
    event.preventDefualt();
    console.log(email);
    console.log(password);
  }
    return (
      <React.Fragment>
      <NavBar darktheme={true}/>
      <section className="signup-container">
        <div className="image-container">
            <img src={Signbgimg} alt="login-background" />
        </div>
        <div className="signup-content-container">
          <div className="container">
          <div className="content-wrapper">
            <h2>Sign up</h2>
              <p>Creat a new account with an email and password.</p>

              <form onSubmit={handlesubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type='email' 
                    className="form-input" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={handlechange}
                    />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type='password' 
                    className="form-input" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlechange}
                   />
                </div>

                <div className="form-group">
                  <input 
                    type='submit' 
                    className="button-primary" 

                    value='Sign up'/>
                </div>
              </form>
          </div>
          </div>
        </div>
    
      </section>
      </React.Fragment>
    );
  }
  
  export default Signup;