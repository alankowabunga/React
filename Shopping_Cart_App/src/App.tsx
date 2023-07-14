import { useState } from "react";

import "./App.css";
import { Tabs } from "./components/Header/Tabs";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Header/NavBar";
import { Header } from "./components/Header/Header";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/navbar" element={<NavBar />} />
                <Route path="/tabs" element={<Tabs />} />
                <Route path="/header" element={<Header />} />
            </Routes>
        </>
    );
}

export default App;
