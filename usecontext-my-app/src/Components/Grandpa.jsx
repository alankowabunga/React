import React,{useState,useContext, createContext} from "react";
import { Father } from "./Father";
import "bootstrap/dist/css/bootstrap.css";

export const AppContext = React.createContext("")
export const Grandpa = () => {

  const [input,setInput]=useState("")
  const context = {input,setInput}

    return (
        <>
            <nav className="navbar bg-primary-subtle rounded m-2 ">
                <div className="container-fluid">
                    <a className="navbar-brand">Grandpa Component: {input}</a>
                    <form className="d-flex" role="search">
                        {
                          <AppContext.Provider value={context}>
                            <Father />
                          </AppContext.Provider>
                          }
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            useContext
                        </button>
                    </form>
                </div>
            </nav>
        </>
    );
};
