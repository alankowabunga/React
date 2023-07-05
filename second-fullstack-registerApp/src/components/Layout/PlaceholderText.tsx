import React, { useState, useEffect,} from 'react'

export const PlaceholderText = () => {

    const [placeholder, setPlaceholder] = useState("")
    const string = "Seearch User";

    let i = 0;
    let ph: HTMLElement | null

    useEffect(() => {
        ph = document.getElementById("ph")

        const interval = setInterval(() => {
            setPlaceholder(prevPlaceholder => `${prevPlaceholder}${string[i]}`)
            i++;
            
            if (i === string.length) {
                clearInterval(interval)
                setPlaceholder("Search User")
                // setPlaceholder("")
                i=0
            }
        }, 200)

        return ()=>clearInterval(interval)
    }, [])

    return (
        <input className="form-control me-2"
            type="search"
            id="ph" placeholder={placeholder} />
    )
}