import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../App.css";
import {
    faMagnifyingGlassPlus,
    faPenToSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

// interface User {
//     id: any;
//     email: string;
//     age: number;
//     first_name: string;
//     last_name: string;
// }

// interface RowsProps {
//     loadUser: () => void;
//     userInput: string;
// }

export const Rows = ({ userInput }: any) => {
    // 檢查從 placeholder.tsx 的 input 是否傳值成功
    useEffect(() => {
        console.log("From Rows.tsx:", userInput);
    }, [userInput]);

    // search filter
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(); //初始化取得資料
    }, []);

    const getData = async () => {
        await axios
            .get("http://localhost:8080/api/users")
            .then((datas) => {
                setData(datas.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // 處理點擊垃圾桶刪除 User
    const deleteUser = async (id: any) => {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
        getData();
    };

    return (
        <tr className="table-group-divider">
            <th scope="row">2</th>
            <td>2</td>
            <td>2</td>
            <td className="p-2 action">
                <Link to={`/viewuser`}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlassPlus}
                        className="text-secondary"
                    />
                </Link>
                <Link to={`/edituser`}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <FontAwesomeIcon
                    icon={faTrash}
                    className="text-danger bin"
                    onClick={() => deleteUser(2)}
                />
            </td>
        </tr>
    );
};
