import React, {useState} from "react";
import "./Login.css";
import logo from "./logo.png";
import {Link, useNavigate} from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const history = useNavigate(); //push to history to redirect
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = event =>{
        event.preventDefault(); //to stop the refresh
        //login logic

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to home page
                history("/");
            })
            .catch(e => alert(e.message));

    };

    const register = event =>{
        event.preventDefault(); //to stop the refresh
        //register logic
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //created user and logged in, redirect to home page
                history("/");

            })
            .catch(e => alert(e.message));
    };

  return (
    <div className="login">
        <Link to= "/"> 
            <img
            className="login-logo" 
            src={logo} 
            alt="login logo" 
            />
        </Link>

        <div className="login-container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"  />
                <button onClick={login} type="submit" className="login-sign-in">Sign In</button>
            </form>
            <p>
            By continuing, you agree to AmeBooks' Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className="login-register">Create Your Account</button>
        </div>
    </div>
  )
}

export default Login;