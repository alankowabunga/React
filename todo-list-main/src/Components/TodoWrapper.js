// Parent Component
import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    /* 
    要將 todos state 宣告在父元件，各個子元件才都能取得使用。
    輸入值是在 TodoForm 元件接收的，要將值傳過來可以用 props 處理。
    todos function 會接收 TodoForm 元件傳過來的 props，儲存了使用者輸入的值。
    ->　並將值用來設定成新的 todos 陣列資料*/

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        // 接受到從 TodoForm 元件傳遞過來的 todo(text)。隨後會當作 props 再傳給 Todo 元件使用。
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false,
                isEditing: false,
            },
        ]);

        console.log("current input to-do:", todo); // 檢視新狀態，
    };
    /* 
    [藉由判斷 id 來調整 completed 的屬性值，如果 id 相符救回傳新的 object，不相符就不變回傳 todo 即可。...todo 代表複製 todo 以外的其他屬性 ]。
    
    參數 id 為 Todo Component 接收到 props.toggleComplete 屬性呼叫 toggleFunction() 、並傳入 props.tasks.id 回來當引數。*/
    const toggleFunction = (id) => {
        console.log("toggle function executed.");

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteFunction = (id) => {
        console.log("delete function activated.");

        // 只帶入一個參數，這個參數即表示是使用filter()此陣列的元素
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const clickEdit = (id) => {
        console.log("Edit Icon Clicked.");

        // 如果點擊編輯 icon，就切換 isEditing 屬性為 true / false
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };
    // 更新 todo 的 task 屬性，並將 isEditing 改回原本的布林值。
    const editFunction = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, task, isEditing: !todo.isEditing }
                    : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done !</h1>

            <TodoForm addTodos={addTodo} />
            {todos.map(
                (eachtodo, index) =>
                    eachtodo.isEditing /*判斷 isEditing 的屬性值，決定要顯示哪一個元件 */ ? (
                        <EditTodoForm
                            editTodo={editFunction}
                            todo={eachtodo}
                            key={index}
                        />
                    ) : (
                        <Todo
                            tasks={eachtodo}
                            key={index}
                            toggleComplete={toggleFunction}
                            deleteTodo={deleteFunction}
                            clickEdit={clickEdit}
                        />
                    )
                // arrow function () => 沒有大括號 {} 稱為隱式返回（implicit return），也就是沒有使用 return 關鍵字。
            )}
        </div>
    );
};
