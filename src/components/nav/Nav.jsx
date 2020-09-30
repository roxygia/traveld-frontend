import React, { useEffect, useState} from "react"
import { Link, useLocation } from "react-router-dom"
import { isAuthenticated, clearStorage, getStorage } from "../../utilities/localStorage";
import "./Nav.css"


function Nav() {
    //variables
    const [isloggedin, setisloggedin] = useState(false);
    const location = useLocation();
    
    //method
    useEffect(() => {
        isAuthenticated() ? setisloggedin(true) : setisloggedin(false);
        }, [location]);

    const handleLogout = () => {
        clearStorage();
    };

    //template
    return (
        <div>
            <nav>
                <Link id="nav-link" to="/trips">New Trip</Link>
                <Link id="home-link" to="/">Home </Link>
                {isloggedin ? (
                <Link id="nav-link" to="/login" onClick={handleLogout}>Logout {getStorage("user")}</Link>) 
                : 
                (<Link id="nav-link" to="/login">Login</Link>)}
            </nav>
            <div className="logo">
                <div id="logo-image" alt-text= "logo" ></div>
            </div>
            
        </div>
    )
}

export default Nav;