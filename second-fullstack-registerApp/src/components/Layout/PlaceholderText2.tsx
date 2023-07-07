import React, { useState, useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const PlaceholderText2 = () => {
    const [placeholder] = useTypewriter({
        words: ["Clark Kent", "Burce Wayne", "...etc"],
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 1000,
        loop: 0,
    });

    const [inputValue, setInputValue] = useState("");

    // 使用 useEffect 並將 inputValue 當作依賴項，可以即時查看其變化
    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    return (
        <input
            className="form-control me-2"
            type="search"
            id="ph"
            placeholder={`Search : ${placeholder}`}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
        />
    );
};
