import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary p-2 mb-5">
            <div className="container-fluid">
                <a className="navbar-brand fs-4">HR - System</a>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="User Name"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};
