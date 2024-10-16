import "../../styles/styles.css";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate();
    const [input, setInput] = useState( { username:"", password:"" } );
    
    const handleLogin = (e) => 
    {
        e.preventDefault();

        const reg_Users = JSON.parse( localStorage.getItem("Users"));


        if(input.username === reg_Users.username)
        {
            if(input.password === reg_Users.password)
            {
                localStorage.setItem("LoggedIn", true)
                navigate("/");
            }
            else{ alert("username and password mismatch!!!")}
        }
        else
        {
            alert("User with that name or email was not found!!!, please  correct or signup")
        }
    }

    return(
    <>
    <div className="container"> 
        <form className="frame" id="loginForm" onSubmit={handleLogin}> 

            <div className="login">Login</div>

            <div className="form-group">               
                <input type="text" id="loginUsername" placeholder="Username / Email"
                    name="username" value={ input.username } required
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value}) }
                />
            </div>
            
            <div className="form-group">                
                <input type="password" id="loginPassword" placeholder="Password"
                    name="password" value={ input.password } required
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value}) }
                />
            </div>

            <button className="log">Login</button>
            <div className="reg"></div>

            Don't have an account? <Link to="/register"><u>Register</u></Link>
            
        </form>
      
    </div>
    </>
    ) 
}

