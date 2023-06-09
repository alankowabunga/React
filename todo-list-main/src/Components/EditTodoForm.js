// 利用已經做好的 todoForm 模板，稍作調整即可

import React, { useState } from "react";

export const EditTodoForm = React.forwardRef(({ editTodo, todo },ref) => {

    const [text, setText] = useState(todo.task);

    function handleSubmit(e) {
        e.preventDefault();
        editTodo(text, todo.id);
        setText("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                ref={ref}
                type="text"
                value={text}
                placeholder="update task...?"
                className="todo-input"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button type="submit" className="todo-btn">
                UPDATE
            </button>
        </form>
    );
});
