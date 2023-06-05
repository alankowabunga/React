import { useState } from "react";
import { users } from "./data";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Form } from "./Form";

function App() {
    const [search, setSearch] = useState(""); //初始未輸入

    const handleChange = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value); //使用者輸入\
    };
    var filteredUsers = [];
    if (search !== 0) {
        filteredUsers = users.filter( //filter 回傳的就是篩選過的陣列，放入初始的空陣列中。
            (user) =>
                user.first_name.toLowerCase().includes(search.toLowerCase()) +
                user.last_name.toLowerCase().includes(search.toLowerCase())
        );
    } else {
        filteredUsers = users;
    }

    return (
        <>
            <div className="header">
                <h1>React Search Filter</h1>
                <input
                    type="text"
                    placeholder="Search contact by name"
                    id="input"
                    onChange={handleChange}
                />
            </div>
            <table className="table table-warning table-hovered table-bordered table-striped">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Country</td>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((data, index) => (
                        <Form data={data} key={index} />
                        // 將資料由 props 屬性傳給 Form Component，交由其來排版
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
