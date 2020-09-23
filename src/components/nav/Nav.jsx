import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"


function Nav() {
    return (
        <div alt-text= "logo" id="logo">
            <nav>
                <Link id="nav-link" to="/trip">Trip</Link>
                <Link id="home-link" to="/">Home </Link>
            </nav>
        </div>
    )
}

export default Nav;