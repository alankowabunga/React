import React from "react";

export const Form = ({ data }) => {
    
    // console.log(data.first_name);

    return (
        <tr>
            <td>{data.first_name}</td>
            <td>{data.last_name}</td>
            <td>{data.email}</td>
            <td>{data.Country}</td>
        </tr>
    );
};
