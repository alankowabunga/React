import React, { useState } from "react";

// 接收 TodoWrapper元件傳過來的 props，其儲存了 addTodo function 。
export const TodoForm = ({addTodos}) => { 
    const [text, setText] = useState("");
    
    function handleSubmit(e) {

        // console.log(props.addTodos);
        e.preventDefault(); //避免頁面刷新
        
        console.log("text is:",text);
        addTodos(text); //呼叫 addTodo function 傳入 text 回去給 TodoWrapper 元件。
        setText("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                placeholder="What is the task today?"
                className="todo-input"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button type="submit" className="todo-btn">
                ADD
            </button>
        </form>
    );
};
