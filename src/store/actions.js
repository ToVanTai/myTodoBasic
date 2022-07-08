import { ADD_TODO, CHANGE_TODO, DELETE_TODO, CHANGE_STATUS_INPUT,CHANGE_TODO_STATUS, SET_INPUT_ACTIVE } from "./constants";
export const addTodo = (payload)=>{
    return {
        type: ADD_TODO,
        payload
    }
}
export const changeTodo = (payload)=>{
    return {
        type: CHANGE_TODO,
        payload
    }
}
export const deleteTodo = (payload)=>{
    return {
        type: DELETE_TODO,
        payload
    }
}
export const changeTodoStatus = (payload)=>{
    return {
        type : CHANGE_TODO_STATUS,
        payload
    }
}
export const changeStatusInput = (payload)=>{
    return {
        type: CHANGE_STATUS_INPUT,
        payload
    }
}
export const setInputActive = (payload)=>{
    return {
        type: SET_INPUT_ACTIVE,
        payload
    }
}