import "./App.css";
import { AddUser } from "./components/User/AddUser.jsx";
import { ViewUser } from "./components/User/ViewUser.js";
import { EditUser } from "./components/User/EditUser.js";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./components/Home.js";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/navbar" element={<Navbar />} />
                    <Route path="/adduser" element={<AddUser />} />
                    <Route path="/viewuser" element={<ViewUser />} />
                    <Route path="/edituser/:id" element={<EditUser />} />
                    <Route path="/viewuser/:id2" element={<ViewUser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
