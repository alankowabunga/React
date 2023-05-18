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

  // 匿名函式，將回傳值儲存在 getItems，成為 List 元件的引數
  const getItems = () => {
    return [number,number+1,number+2]
  }
  

  return (
   <div style={ThemeStyles}>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
      <button onClick={()=>setDarkTheme(prevDarkTheme => !prevDarkTheme)}>Toggle Theme</button>
      <div>Hello There</div>
      <List getItems={getItems} />
   </div> 
  )
}

export default App;
