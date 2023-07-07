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
import "bootstrap/dist/css/bootstrap.css";

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

    /* 測試 map()、filter() 方法
    const testFilter=()=>{
        data.filter(item=>{
            return item.first_name.length ===3?item:null
        }).map(item=>console.log(item))
    }
    testFilter();
    */
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
        <>
            {data
                .filter((item) => {
                    return userInput === ""
                        ? item
                        : item.first_name
                              .toLowerCase()
                              .includes(userInput.toLowerCase()) ||
                              item.last_name
                                  .toLowerCase()
                                  .includes(userInput.toLowerCase()) ||
                              item.email
                                  .toLowerCase()
                                  .includes(userInput.toLowerCase());
                })
                .map((item) => (
                    <tr key={item.id} className="table-group-divider">
                        <th>{item.id}</th>
                        <td>{item.first_name}</td>
                        <td>{item.email}</td>
                        <td className="p-2 action">
                            <Link to={`/viewuser/${item.id}`}>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                    className="text-secondary"
                                />
                            </Link>
                            <Link to={`/edituser/${item.id}`}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Link>
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="text-danger bin"
                                onClick={() => deleteUser(item.id)}
                            />
                        </td>
                    </tr>
                ))}
        </>
    );
};
