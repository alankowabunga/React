// Parent Component
import React, { useState, useRef, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {

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

    const inputRef = useRef();

    // 按編輯 icon，就切換 isEditing 屬性為 true / false
    const clickEdit = (id) => {

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        )
    }

    var inputVal = useRef("");
    const assignVal = (id, task) => {
        todos.forEach(todo => {
            if (todo.id === id) {
                console.log("value assignd:", task);
                console.log("value type", typeof (task))//data-type: string

                inputVal.current = task; // 將 task屬性值儲存
            }
        })
    }
    useEffect(() => {
        console.log("after render find element");
        findElement();
    })
    const findElement = () => {
        console.log("current 儲存的值為:", inputVal.current)
        var target = document.querySelector(`.todo-input[value="${inputVal.current}"]`)
        if (target) {
            console.log("成功取得元素、自動聚焦。")
            target.focus();

            /*編輯 icon 時自動聚焦(這裡想利用取得 DOM input[value] 失敗，因為rerender後 選擇器已經處理完抓不到渲染後的元素)。
            解法: 先將當前點及元素的 value 屬性值儲存在 useRef.current ，並利用 useEffect 會在渲染後質性的特性，在渲染後才去呼叫 findElement function，並利用先前儲存的 useRef current屬性值找到當前元素的 value相同的目標輸入，並將其聚焦 focus */
        }
    }

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
                            ref={inputRef}
                        />
                    ) : (
                        <Todo
                            tasks={eachtodo}
                            key={index}
                            toggleComplete={toggleFunction}
                            deleteTodo={deleteFunction}
                            clickEdit={clickEdit}
                            assignValue={assignVal}
                        />
                    )
                // arrow function () => 沒有大括號 {} 稱為隱式返回（implicit return），也就是沒有使用 return 關鍵字。
            )}
        </div>
    );
};
