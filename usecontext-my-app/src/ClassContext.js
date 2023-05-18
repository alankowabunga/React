import React,{Component} from 'react'
import { ThemeContext } from './App'

class ClassContext extends Component{

    themeStyles(dark){
        return {
            backgroundColor:dark? '#333':'#ccc',
            color:dark? '#ccc':'#333',
            padding:"2rem",
            margin:"2rem"
        }
    }
// 每個組件都需要定義一個名為 render() 的方法，並將返回的描述性表示轉換為實際的 DOM 元素，然後渲染到頁面上。
    render(){
        return(
            <ThemeContext.Consumer>
                
                {/* 接收父元件的 context provider value -> value={darkTheme} */}

                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }

}

export default ClassContext;