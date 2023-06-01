import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ tasks, toggleComplete, deleteTodo, clickEdit }) => {
    return (
        /*
    1. 取得 todos state陣列中的 task 屬性值 todo 。
    2. 利用 ternary expression 判斷 todos state 中的 completed 屬性值 */
        <div className="Todo">
            <p
                className={`${tasks.completed ? "completed" : ""}`}
                onClick={() => toggleComplete(tasks.id)}
            >
                {tasks.task}
            </p>
            <div>
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={(e) => {
                        e.stopPropagation();
                        clickEdit(tasks.id); //將相對應的 todo元素的 isEditing 屬性值改成相反的布林值。
                    }}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteTodo(tasks.id);
                    }}
                />
            </div>
        </div>
    );
};
