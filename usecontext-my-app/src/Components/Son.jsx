import React,{useContext} from "react";
import { Grandpa,AppContext } from "./Grandpa";
 

export const Son = () => {
  const context = useContext(AppContext)
  // context 是一個包含 { input, setInput} 的物件
    return (
        <input
            className="form-control me-2"
            type="search"
            placeholder="Son Component"
            value={context.input}
            onChange={(e)=>context.setInput(e.target.value)}
        />
    );
};
