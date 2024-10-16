import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register()
{
    const navigate = useNavigate();

    const [input, setInput] = useState( { username:"", email:"", password:"", confirm:"" } );

    const handleSubmit = (e) =>
    {
        if((input.username && input.email) !== null)
        {
            console.log("3.name & email");
            if(input.password === input.confirm)
            {
                e.preventDefault();
                localStorage.setItem("Users", JSON.stringify(input));

                //Clear-prev-todo-list - if exist
                handleClearTodos();

                navigate("/login");
            }
            else
            {
                alert("Password mismatch");
            }
        }       
    }


    const handleClearTodos = () => 
        {
            //setTodoList([]);
            localStorage.removeItem('TodoItems');
        };

    return (
    <>
       <div className="container">
     
        <form className="frame" id="registerForm" onSubmit={handleSubmit}>
            <div className="login">Register</div>
            <div className="form-group">                
                <input type="text" id="registerUsername" placeholder="Username( eg.Nickname )" 
                    name="username" value={ input.username } required
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value}) }
                />
            </div>

            {/* <div className="form-group">                
                <input type="text" id="registerNames" placeholder="Names(eg.First-&-LastName)"
                    name="names" value={ input.names } required
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value}) }
                />
            </div> */}

            <div className="form-group">                
                <input type="email" id="registerEmail" placeholder="Email Address"
                    name="email" value={ input.email } required
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value}) }
                />
            </div>

            <div className="form-group">                
                <input type="password" id="registerPassword" placeholder="Password"  
                    name="password" value={ input.password } required
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value}) }
                />
            </div>

            <div className="form-group">                
                <input type="password" id="confirmPassword" placeholder="Confirm Password"  
                    name="confirm" value={ input.confirm } required
                    onChange={(e) => setInput({...input, [e.target.name]: e.target.value}) }
                />
            </div>

            <button className="log">Register</button>
            <div className="reg"></div>
            Don't have an account? 
            <Link to="/login"><u>Login</u></Link>
            
        </form>
       
    </div>        
    </>
    )
}