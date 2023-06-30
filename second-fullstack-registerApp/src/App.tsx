import "./App.css";
import { useState } from "react";
import { AddUser } from "./components/User/AddUser.jsx";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./components/Home.js";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <AddUser />
        </>
    );
}

export default App;
