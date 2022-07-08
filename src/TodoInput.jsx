import { useContext, useLayoutEffect, useRef, useState } from "react";
import { todoContext } from "./store/TodoProvider";
import {
    changeStatusInput,
    addTodo,
    setInputActive,
    changeTodo,
} from "./store/actions";
function TodoInput() {
    const [todoValue, setTodoValue] = useState("");
    const todoState = useContext(todoContext);
    const { inputStatus, dispatch, indexActive, todoList } = todoState;
    const inputRef = useRef();
    const handleAdd = () => {
        if (todoValue !== "") {
            if (inputStatus === "add") {
                let todoAdd = {
                    status: "unChecked",
                    content: todoValue,
                };
                dispatch(addTodo(todoAdd));
                dispatch(setInputActive(null));
                setTodoValue("");
                inputRef.current.focus();
            } else {
                //sua todo
                if (inputStatus === "change" && indexActive !== null) {
                    let value = {
                        content: todoValue,
                        index: indexActive,
                    };
                    dispatch(changeTodo(value));
                    dispatch(setInputActive(null));
                    dispatch(changeStatusInput("add"));
                    setTodoValue("");
                    inputRef.current.focus();
                }
            }
        }
    };
    useLayoutEffect(() => {
        if (inputStatus === "change" && indexActive !== null) {
            setTodoValue(todoList[indexActive].content);
        }
    }, [indexActive]);
    const onCancleInput = () => {
        dispatch(changeStatusInput("add"));
        dispatch(setInputActive(null));
    };
    return (
        <div className="input">
            <input
                ref={inputRef}
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                className="input-name"
                type="text"
                name=""
                placeholder="Enter todo..."
            />
            <button onClick={handleAdd}>
                {inputStatus === "add" ? "Add" : "Change"}
            </button>
            {inputStatus !== "add" ? (
                <button onClick={onCancleInput}>Cancel</button>
            ) : (
                ""
            )}
        </div>
    );
}
export default TodoInput;
