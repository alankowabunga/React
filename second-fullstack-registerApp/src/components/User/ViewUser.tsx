import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../../App.css";
import { Navbar } from "../Navbar";

export const ViewUser = () => {
    const { id2 } = useParams();

    const [user, setUser] = useState({
        id: null,
        age: null,
        email: "",
        first_name: "",
        last_name: "",
    });

    useEffect(() => {
        loadUser();
        console.log("view id:", id2);
    }, []);

    const loadUser = async () => {
        const viewedUser = await axios.get(
            `http://localhost:8080/api/users/${id2}`
        );
        // console.log(viewedUser);
        setUser(viewedUser.data);
    };

    return (
        <>
            <Navbar/>
            <form className="border border-3 p-3 rounded m-2 ">
                <div className="fs-2 mb-3 text-decoration-underline">
                    User Details
                </div>
                <div className="card mx-auto" style={{ width: " 20rem" }}>
                    <div className="card-body">
                        <h3 className="card-title text-bg-dark rounded">ID</h3>
                        <span className="badge text-bg-primary card-id rounded-pill">
                            {id2}
                        </span>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item position-relative">
                            <span className="badge position-absolute bg-dark">
                                First Name:
                            </span>
                            <br />
                            <p className="bg-success-subtle rounded fs-5">
                                {user.first_name}
                            </p>
                        </li>
                        <li className="list-group-item position-relative">
                            <span className="badge position-absolute bg-dark">
                                Last Name:
                            </span>
                            <br />
                            <p className="bg-success-subtle rounded fs-5">
                                {user.last_name}
                            </p>
                        </li>
                        <li className="list-group-item position-relative">
                            <span className="badge position-absolute bg-dark">
                                Email:
                            </span>
                            <br />
                            <p className="bg-success-subtle rounded fs-5">
                                {user.email}
                            </p>
                        </li>
                        <li className="list-group-item position-relative">
                            <span className="badge position-absolute bg-dark">
                                Age:
                            </span>
                            <br />
                            <p className="bg-success-subtle rounded fs-5">
                                {user.age}
                            </p>
                        </li>
                    </ul>
                    <div className="card-body">
                        <Link className="btn btn-outline-success" to="/">
                            Return
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
};
