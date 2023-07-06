import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";
import {
    faMagnifyingGlassPlus,
    faPenToSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

interface User {
    id: any;
    email: string;
    age: number;
    first_name: string;
    last_name: string;
}

interface RowsProps {
    key: number;
    user: User;
    loadUser: () => void;
}

export const Rows = ({ key, user, loadUser }: RowsProps) => {
    const deleteUser = async (id: any) => {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
        loadUser();
    };

    return (
        <tr className="table-group-divider">
            <th scope="row">{user.id}</th>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td className="p-2 action">
                <Link to="/viewuser">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlassPlus}
                        className="text-secondary"
                    />
                </Link>
                <Link to={`/edituser/${user.id}`}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <FontAwesomeIcon
                    icon={faTrash}
                    className="text-danger"
                    onClick={() => deleteUser(user.id)}
                />
            </td>
        </tr>
    );
};
