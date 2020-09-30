import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import "./LoginForm.css"
import { setStorage, isAuthenticated } from "../../utilities/localStorage"

function LoginForm() {
    //variables 
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const history = useHistory();


    //method
    const handleChange = (e) => {
        const {id, value} = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }))
    }

    const postData = async() => {
        const response = await fetch
        (`${process.env.REACT_APP_API_URL}api-token-auth/`, 
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
        );
        return response.json();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(credentials.username && credentials.password) {
         postData().then((response) => {
                setStorage("token", response.token)
                setStorage("user", credentials.username)

                if (isAuthenticated()){
                    history.push("/");
                } 
            });
        }
    }


    //template
    return (
        <div className="login-page">
            <form className="login-form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Enter username" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" placeholder="Enter password" 
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
                <p className="message">Not registered?</p>
                <Link to="/users">Create an account</Link>
            </form>
        </div>
    )
}

export default LoginForm;
