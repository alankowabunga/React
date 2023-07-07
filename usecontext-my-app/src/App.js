import React, { useState } from 'react'
import ClassContext from './ClassContext'
import FunctionContext from './FunctionContext';
import { Grandpa } from './Components/Grandpa';

export const ThemeContext = React.createContext();


function App() {

  // 設定亮暗主題的 useState，狀態在 App元件決定，CSS格式則在子元件裡，取得父元件的 darkTheme 狀態再進一步操作。
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }


  return (

    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContext/>
        <FunctionContext/>
      </ThemeContext.Provider>
      <Grandpa/>
    </>

  );
}

export default App;
