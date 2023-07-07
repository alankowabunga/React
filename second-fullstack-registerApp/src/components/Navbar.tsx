import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { PlaceholderText2 } from "./Layout/PlaceholderText2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary p-2 mb-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fs-4 badge bg-success">
                    <FontAwesomeIcon icon={faIdCardClip} /> HR - System
                </Link>
                <form className="d-flex" role="search">
                    <PlaceholderText2 />
                    <Link
                        to="/adduser"
                        className="btn btn btn-outline-warning "
                    >
                        <pre className="my-auto">Add User</pre>
                    </Link>
                </form>
            </div>
        </nav>
    );
};
