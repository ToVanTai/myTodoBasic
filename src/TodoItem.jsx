import {useContext} from "react"
import { todoContext } from "./store/TodoProvider";
import {changeTodoStatus,changeStatusInput, deleteTodo, setInputActive } from "./store/actions";
function TodoItem({index,value}) {
    const todoState = useContext(todoContext)
    const {dispatch} = todoState
    const handleDeleteTodo = ()=>{
        dispatch(changeStatusInput("add"))
        dispatch(deleteTodo(index))
        dispatch(setInputActive(null))
    }
    const handleChangeTodo = (index)=>{
        dispatch(changeStatusInput("change"))
        dispatch(setInputActive(index))
    }
    return (
        <li className="input-item">
            <input onChange={()=>{dispatch(changeTodoStatus(index))}} checked={value.status ==="checked"} type="checkbox" name="" id="" />
            <span onClick={()=>handleChangeTodo(index)} className={value.status === "checked"? "input-content checked":"input-content"}>{value.content}</span>
            <span onClick={handleDeleteTodo} className="input-del">X</span>
        </li>
    );
}
export default TodoItem