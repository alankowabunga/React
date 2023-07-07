import React, {useContext} from "react";
import { useTypewriter} from "react-simple-typewriter";
import { InputContext } from "../Home";

export const PlaceholderText2 = () => {

    const [placeholder] = useTypewriter({
        words:["Clark Kent","Burce Wayne","...etc"],
        typeSpeed:80,
        deleteSpeed:80,
        delaySpeed:1000,
        loop:0
    })

    const context = useContext(InputContext)

    return (
        <input
            className="form-control me-2"
            type="search"
            id="ph"
            placeholder={`Search : ${placeholder}`}
            value={context.input}
            onChange={(e)=>context.setInput(e.target.value)}
        />
    );
};
