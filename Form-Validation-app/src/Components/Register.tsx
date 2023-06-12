import React, { useRef, useEffect, useState } from "react";
import "../register.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{6,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => {
    return (
        <section className="bg-primary p-5 rounded">
            <p className=""></p>
            <h1 className="text text-white-50">Register</h1>
            <form className="form">
                <div className="form-group my-4">
                    <label htmlFor="username" className="text text-white fs-5">
                        username:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="username"
                        required
                    />
                    <p className="hint">
                        <FontAwesomeIcon icon={faInfoCircle} className="" />
                        4 to 24 characters.
                        <br />
                        Must begin with a letter.
                    </p>
                </div>

                <div className="form-group my-4">
                    <label htmlFor="password" className="text text-white fs-5">
                        password:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="password"
                        required
                    />
                </div>

                <div className="form-group my-4">
                    <label htmlFor="pswChk" className="text text-white fs-5">
                        Confirm Password:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="pswChk"
                        required
                    />
                </div>

                <button className="btn btn-outline-warning btn-lg">
                    Sign Up
                </button>

                <div className="footer mt-4">
                    <p className="text text-white">Already registered?</p>
                    <a href="#" className="text text-white">
                        Sign In
                    </a>
                </div>
            </form>
        </section>
    );
};
