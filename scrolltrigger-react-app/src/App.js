import logo from './logo.svg';
import './App.css';
import gsap from 'gsap'
import React,{useEffect,useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function App() {
  
// 建立 useRef 物件，回傳值是屬性為 current 的物件，初始值為 null
  const imgRef = useRef(null)
  // console.log(imgRef.current); 確定與 DOM img 取得連結。

  useEffect(()=>{
    gsap.to('.App-logo',{
      x:300,
      rotate:720,
      scrollTrigger:{
        trigger:'.App-logo',
        start:"top center",
        markers:true,
        scrub:1
      }
    })
  },[])


  return (
    <div className="App">
        <div className="block"></div>
        <img ref={imgRef} src={logo} className="App-logo" alt="logo" />
        <div className="block"></div>
    </div>
  );
}

export default App;
