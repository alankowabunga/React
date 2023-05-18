import React ,{useContext} from 'react'
import { ThemeContext } from './App';

function FunctionContext() {

    // 用 useContext() 接收 context object，再利用儲存 context value 的變數 dark，在 theme 物件中作條件判斷取得想要的CSS 格式。
    const dark = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: "2rem",
        margin: "2rem"
    }

    return (
        <div style={themeStyles}>Function Theme</div>
    )
}

export default FunctionContext;
