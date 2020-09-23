import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"


function Nav() {
    return (
        
        <nav>
            <Link id="nav-link" to="/trip">Trip</Link>
            <Link id="home-link" to="/">Home </Link>
            <div alt-text= "logo" id="logo-image" ></div>
        </nav>
    
    )
}

export default Nav;