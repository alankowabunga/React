import React, { useEffect, useState } from "react";
import { Rows } from "./Rows";
import { Navbar } from "./Navbar";

export const InputContext = React.createContext({});
export const Home = () => {


    // 抓 Placeholder input value
    const [input, setInput] = useState("");
    const context = { input, setInput };
    // 檢查是否抓取到 input value
    useEffect(() => {
        console.log("From Home.tsx:", input);
    }, [input]);

    return (
        <InputContext.Provider value={context}>
            <Navbar />

            <table className="table table-bordered my-4 p-2">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>

                        <th scope="col">Email</th>

                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{<Rows userInput={input}/>}</tbody>
            </table>
        </InputContext.Provider>
    );
};
