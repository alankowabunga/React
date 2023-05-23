import React, { useState, useReducer } from 'react'

function App() {

  /*useReducer syntax: 
  const [state,dispatch]=useReducer(reducer,initialState)。
  
  dispatch 是一個函數，用來發送 action，reducer 是一個函數，用來處理 state 的變化。*/
  const [state,dispatch] = useReducer(reducer,{ count:0 })

  function reducer(state,action){
    switch (action.type){
      case 'add':
        return({count: state.count +1})
        case 'minus':
          return({count:state.count-1})
      default:
        return state
    }
  }

  function add() {
    dispatch({type:"add"});  
    //將 type 屬性發送到 action 調用 reducer函式，進行 switch 判斷
  }
  function minus() {
    dispatch({type:"minus"});
  }

  return (
    <>
      <div>
        <button onClick={minus}>-</button>
        <span >{state.count}</span>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}

export default App;
