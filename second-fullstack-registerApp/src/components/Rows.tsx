import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css"
import { faMagnifyingGlassPlus ,faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"


export const Rows = ({
    user,
}: {
    user: {
        last_name: string;
        email: string;
        age: number;
        first_name: string;
        id: any;
    };
}) => {
    return (
        <tr className="table-group-divider">
            <th scope="row">{user.id}</th>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td className="p-0 action">
                <Link to="/viewuser">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="text-secondary"/>
                </Link>
                <Link to="/edituser">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <FontAwesomeIcon icon={faTrash} className="text-danger"/>
            </td>
        </tr>
    );
};
