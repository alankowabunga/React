import React from "react";
import { NavBar } from "./NavBar";
import { Tabs } from "./Tabs";
import { Stack } from "react-bootstrap";
import { BreadCrumb } from "./BreadCrumb";

export const Header = () => {
    return (
        <>
            <NavBar />
            <Stack direction="horizontal" className="justify-content-between">
                <BreadCrumb/>
                <Tabs/>
            </Stack>
        </>
    );
};
