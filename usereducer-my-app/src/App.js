import React, { useState, useReducer } from 'react'

function App() {

  const [count, setCount] = useState(0);
  /*useReducer syntax: 
  const [state,dispatch]=useReducer(reducer,initialState)。
  
  dispatch 是一個函數，用來發送 action，reducer 是一個函數，用來處理 state 的變化。*/

  function add() {
    setCount(prevCount => prevCount + 1);
  }
  function minus() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <>
      <div>
        <button onClick={minus}>-</button>
        <span value={count}>{count}</span>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}

export default App;
