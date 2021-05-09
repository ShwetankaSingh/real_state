import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
    activeStyle = { color: "white" };

    render() {

        let buttons;
        if (localStorage.getItem('UId')) {
            buttons = (
                <>
                    <li class="nav-item">
                        <NavLink className="btn btn-outline-white my-2 my-sm-0" to="/" onClick={() => localStorage.clear()}>Logout</NavLink>
                    </li>
                </>
            )
        }
        else {
            buttons = (
                <>
                    <li class="nav-item">
                        <NavLink activeStyle={this.activeStyle} className="btn btn-outline-white my-2 my-sm-0" to="/login">Login</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink activeStyle={this.activeStyle} className="btn btn-outline-white my-2 my-sm-0" to="/signup">SignUp</NavLink>
                    </li>
                  
                </>
            )
        }
        return (

            <nav class="navbar navbar-expand-sm bg-danger navbar-dark sticky-top">
                <h3 class="Heading">RealState</h3>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <NavLink activeStyle={this.activeStyle} className="btn btn-outline-white my-2 my-sm-0" exact to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink activeStyle={this.activeStyle} className="btn btn-outline-white my-2 my-sm-0" to="/about">AboutUs</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink activeStyle={this.activeStyle} className="btn btn-outline-white my-2 my-sm-0" to="/propertylist">Property</NavLink>
                    </li>
                    {buttons}
                </ul>
            </nav>

        )
    }
}

export default Header;