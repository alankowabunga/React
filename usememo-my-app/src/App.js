import React,{useState,useMemo,useEffect} from 'react';

function App() {
  
  const [number,setNumber] = useState(0);
  // 是否為暗主題
  const[dark,setDark] = useState(false);
  // 主題色: 由布林值變數 dark 判斷物件的屬性值。
  const theme = useMemo(()=>{
    return ({
    backgroundColor:dark? 'black':'white',
    color:dark? 'white':'black'
  })},[dark]);

  useEffect(()=>{
    console.log('useEffect: Theme changed');
  },[theme])


  // 宣告變數來儲存 slowFunction 的回傳值
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)},[number]);
    // 意思是 useMemo 記住當前的回傳值，只有當 number 有變化，才會執行耗時的 slowFunction，節省時間、增加效率。
  
  return (
    <>
    {/* e.target.value 是字符串，因此要用 patseInt 轉為數值 */}
      <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}></input>
      <button onClick={()=>setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={theme}>{doubleNumber}</div>
    </>
  );
}
// 接收到引數(當前狀態的數值)後，會回傳其兩倍的值。並使用迴圈讓速度變慢。
function slowFunction(n){
  console.log("Calling slow function");
  for(let i=0;i<1000000000;i++){};
  return n*2;
}

export default App;
