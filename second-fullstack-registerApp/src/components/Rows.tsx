import React from "react";

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
            <td></td>
        </tr>
    );
};
