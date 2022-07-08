import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoContext } from "./store/TodoProvider";
function TodoList() {
    const todoState = useContext(todoContext);
    const { todoList } = todoState;
    return (
        <ul className="list-todo">
            {todoList.map((item, index) => (
                <TodoItem key={index} index = {index} value={item} />
            ))}
        </ul>
    );
}
export default TodoList;
