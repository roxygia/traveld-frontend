import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"


function Nav() {
    //variables




    //template
    return (
        <div>
            <nav>
                <Link id="nav-link" to="/trip">New Trip</Link>
                <Link id="home-link" to="/">Home </Link>
                <Link id="nav-link" to="/login">Login</Link>   
            </nav>
            <div className="logo">
                <div id="logo-image" alt-text= "logo" ></div>
            </div>
            
        </div>
    )
}

export default Nav;