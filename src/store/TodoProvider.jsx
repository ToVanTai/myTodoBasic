import { createContext, useReducer } from "react";
import todoReducer, {todoInit} from "./reducer";
const todoContext = createContext()
function TodoProvider({children})
{
    const [todoState, dispatch] = useReducer(todoReducer, todoInit)
    const {todoList, inputStatus,indexActive} = todoState
    const value = {
        todoList,
        inputStatus,
        dispatch,
        indexActive
    }
    return <todoContext.Provider value={value}>
        {children}
    </todoContext.Provider>
}
export default TodoProvider
export {todoContext}