import React, { useState, useRef, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const renderCount = useRef(1) //{ current : 0 }
  // 宣告 useRef 變數: 連結 DOM & REACT 
  const inputRef = useRef(null)
  // 宣告 useRef 變數: 儲存前一個輸入的值
  const prevInput = useRef('') //{ current : ''}

  useEffect(() => {renderCount.current += 1});


  // 將當前狀態儲存到 prevInput.current 陣列中，useEffect 的回調函數是在渲染完成之後執行的，因此會保留並可顯示在渲染後。
  useEffect(()=>{ prevInput.current = text},[text])

  // 點擊事件的函式
  function focusBtn(){

    console.log(inputRef.current); 
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" onChange={(e) => setText(e.target.value)}></input>
      <div>You're typing {text}, and you used to type {prevInput.current}.</div>
      <div>Render { renderCount.current } time.</div>
      <button onClick={focusBtn}>自動聚焦</button>
    </>
  );
}

export default App;
