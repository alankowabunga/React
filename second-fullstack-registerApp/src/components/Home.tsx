import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Rows } from "./Rows";
import { Cursor, useTypewriter} from "react-simple-typewriter";

export const UserContext = React.createContext();
export const Home = () => {


    const BaseUrl = "http://localhost:8080/api/users";
    const [users, setUser] = useState([]);
    const [text] = useTypewriter({
        words:['Buen Dia','Buenas Tardes','Buenas Noches'],
        loop:0,
        typeSpeed:80,
        deleteSpeed:80,
        delaySpeed:1000
    })

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
        <>
            {/* <h3>{text}<Cursor cursorStyle="_"/></h3> */}
            
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
                    <UserContext.Provider value={{users,loadUser}}>
                        {users.map((user, index) => {
                            return <Rows key={index} user={user} loadUser={loadUser}/>;
                        })}
                    </UserContext.Provider>
                </tbody>
            </table>
        </>
    );
};
