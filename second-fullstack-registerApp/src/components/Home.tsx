import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rows } from "./Rows";

export const Home = () => {
    const BaseUrl = "http://localhost:8080/api/users";
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        // const datas = await axios.get(BaseUrl)
        axios.get(BaseUrl)
            .then((datas) => { setUser(datas.data) })
            .catch((error) => { console.error(error) })
    };

    return (
        <table className="table table-bordered my-4 p-2">
            <thead className="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return <Rows key={index} user={user} />;
                })}
            </tbody>
        </table>
    );
};
