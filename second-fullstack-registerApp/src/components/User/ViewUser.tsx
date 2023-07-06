import React, { useContext, useEffect } from "react";
import { UserContext } from "../Home";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const ViewUser = () => {
    // const {users,loadUser} = useContext(UserContext)
    const { id } = useParams()

    const [user, setUser] = useState({
        age: null,
        email: "",
        first_name: "",
        last_name: "",
    })

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
      console.log("id:",id)
        const viewedUser = await axios.get(`http://localhost:8080/api/users/${id}`);
        console.log(viewedUser)
        setUser(viewedUser.data);
    }

    return (
        <form className="border border-3 p-3 rounded m-2 ">
            <div className="fs-2 mb-3 text-decoration-underline">
                Register Form
            </div>
            <div className="card mx-auto" style={{ width: " 18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">ID:{id}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">First Name:</li>
                    <b>{user.first_name}</b>
                    <li className="list-group-item">Last Name:</li>
                    <b>{user.last_name}</b>
                    <li className="list-group-item">Email:</li>
                    <b>{user.email}</b>
                    <li className="list-group-item">Age:</li>
                    <b>{user.age}</b>
                </ul>
                <div className="card-body">
                    <Link className="btn btn-outline-success" to="/">
                        Return
                    </Link>
                </div>
            </div>
        </form>
    );
};
