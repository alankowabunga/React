import React, { useState, useEffect, useRef } from "react";
import { Cursor, useTypewriter} from "react-simple-typewriter";

export const PlaceholderText2 = () => {

    const [placeholder] = useTypewriter({
        words:["Clark Kent","Burce Wayne","...etc"],
        typeSpeed:80,
        deleteSpeed:80,
        delaySpeed:1000,
        loop:0
    })

    return (
        <input
            className="form-control me-2"
            type="search"
            id="ph"
            placeholder={`Search : ${placeholder}`}
        />
    );
};
