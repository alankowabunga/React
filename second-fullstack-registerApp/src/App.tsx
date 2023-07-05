import "./App.css";
import { useState } from "react";
import { AddUser } from "./components/User/AddUser.jsx";
import { ViewUser } from "./components/User/ViewUser.js";
import { EditUser } from "./components/User/EditUser.js";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./components/Home.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/navbar" element={<Navbar />} />
                    <Route path="/adduser" element={<AddUser />} />
                    <Route path="/viewuser" element={<ViewUser/>} />
                    <Route path="/edituser" element={<EditUser/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
