import React,{useState,useCallback,useMemo} from 'react'
import List from './List';

function App() {
  // input 數值
  const [number,setNumber] = useState(1)
  // 顏色主題
  const [darkTheme,setDarkTheme] = useState(true);
  const ThemeStyles = {
    backgroundColor:darkTheme? '#ccc':'#333',
    color:darkTheme? '#333':'#ccc',
    display:'flex',
    flexDirection:'column'
  }

  // 匿名函式，將回傳值儲存在 getItems，成為 List 元件的引數，當任一元件改變 react 都會重新渲染，陣列中的值 number也都是重新產生的，即使值相同(記憶體位置不一樣)，react 也會視為元件屬性改變進而重新渲染。此時我們就可以使用 useCallback( 概念和 useMemo 相同)
  const getItems = useCallback(() => {
    return [number,number+1,number+2]
  },[number]) // 陣列中會改變的屬性是 number，將其設為 dependency。
  

  return (
   <div style={ThemeStyles}>
      <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}></input>
      <button onClick={()=>setDarkTheme(prevDarkTheme => !prevDarkTheme)}>Toggle Theme</button>
      <div>Hello There</div>
      <List getItems={getItems} />
   </div> 
  )
}

export default App;
