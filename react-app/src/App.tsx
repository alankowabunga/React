import ListGroup from "./Components/ListGroup";
import React, { useState } from "react";

function App() {
  /* 下面使用 destructuring 將 useState 回傳的陣列做解構賦值(賦值 count)，count 會回傳當前狀態、setCount 是用來更新狀態的函式。*/
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('Red')
  
  function minusCount() {
    
    setCount(prevCount => prevCount -1);
    setTheme('Blue');
    //  切記!設定狀態要用 function 來更新，避免下面的例子。

/*
    A:
    setState(prevState =>{
      return { ...prevState, count: prevState.count - 1} 

      
        return { count: prevState.count - 1}
        1. 回傳物件資料、新狀態的值 。
        2. setState 更新狀態的方式是複寫舊狀態，因此若是沒有包含舊的其他屬性(如 color)的話，更新後結果就不會有 color 屬性存在。
        解決方式: 使用 rest operater(...)將所有前一個狀態的屬性都直接包含在新的狀態值來 return 回傳。
      
    })*/


    /*A:
      setCount(count - 1); 
      setCount(count - 1); 
     設定更新的狀態為:目前狀態 - 1
     但是有個問題就是他們是相同當前狀態得出相同結果，只是複寫對方而已。
     */
  }

  function addCount() {
    setCount(prevCount => prevCount +1);
    setTheme('Red');
  }

  return (
    <>
      <div>
        <ListGroup />
      </div>

      <br />
      <br />

      <button onClick={minusCount}>-</button>
      {/* count 是自己設定的當前狀態 */}
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={addCount}>+</button>
    </>
  );
}

export default App;
