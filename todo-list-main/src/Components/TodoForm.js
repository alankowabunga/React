import React,{useState} from 'react'

export const TodoForm = () => {

  const [text,setText] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    console.log(text);
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" placeholder='What is the task today?' className="todo-input" onChange={e=>{setText(e.target.value)}}/>
        <button type="submit" className='todo-btn'>ADD</button>
    </form>
  )
}
