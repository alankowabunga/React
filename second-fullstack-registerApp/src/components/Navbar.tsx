import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom'
import { PlaceholderText } from "./Layout/PlaceholderText";

export const Navbar = () => {

    return (
        <nav className="navbar bg-body-tertiary p-2 mb-5">
            <div className="container-fluid">
                <a className="navbar-brand fs-4">HR - System</a>
                <form className="d-flex" role="search">
                    <PlaceholderText/>
                    <Link to="/adduser" className="btn btn btn-outline-warning "><pre className="my-auto">Add User</pre></Link>
                </form>
            </div>
        </nav>
    );
};
