import React, { useEffect, useState } from 'react'

//父元件 App 通過 props 傳遞了一個函數 getItems 到子元件 List。子元件在渲染後，使用 useEffect 鉤子來調用 getItems 函數並更新組件的狀態，這個狀態是一個名為 items 的數組。
export default function List({ getItems }) {

    const [items, setItems] = useState([])

    // 調用 getItems 函數來獲取一個由三個數字組成的數組，然後使用 setItems 方法將這個數組賦值給 items 狀態
    useEffect(() => {
        setItems(getItems())
    }, [getItems])



    return items.map(item => <div>{item}</div>)
}