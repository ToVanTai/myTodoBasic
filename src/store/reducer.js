import { ADD_TODO, CHANGE_TODO, DELETE_TODO, CHANGE_STATUS_INPUT,CHANGE_TODO_STATUS, SET_INPUT_ACTIVE } from "./constants";
const itemStorage = "myTodoTVT"
const getTodoStorage = function(){
    let result = localStorage.getItem(itemStorage)
    if(!result){
        result = {
            todoList: [],
            inputStatus: "add",//change
            indexActive:null
        }
    }else{
        result = JSON.parse(result)
    }
    return result
}
const addTodoStorage = function(value){
    let valueAdd = JSON.stringify(value)
    localStorage.setItem(itemStorage,valueAdd)
}
// const todoInit = {
//     todoList: [{"status":"checked","content":"Lau nha"},{"status":"unChecked","content":"Rua bat"}],
//     inputStatus: "add",//change
//     indexActive:null
// }
const todoInit = getTodoStorage();
const todoReducer = (prevState, action)=>{
    let todoList 
    switch(action.type){
        case CHANGE_STATUS_INPUT:
            addTodoStorage({...prevState,"inputStatus": action.payload})
            return {...prevState,"inputStatus": action.payload}
        case ADD_TODO:
            addTodoStorage({...prevState, "todoList": [action.payload,...prevState.todoList]})
            return {...prevState, "todoList": [action.payload,...prevState.todoList]}
        case CHANGE_STATUS_INPUT:
            addTodoStorage({...prevState, "inputStatus": action.payload})
            return {...prevState, "inputStatus": action.payload}
        case DELETE_TODO:
            todoList = [...prevState.todoList]
            todoList.splice(action.payload, 1)
            addTodoStorage({...prevState,"todoList": todoList})
            return {...prevState,"todoList": todoList}
        case CHANGE_TODO_STATUS:
            todoList = [...prevState.todoList]
            todoList[action.payload].status =  (todoList[action.payload].status === "checked" ? "unChecked" : "checked")
            addTodoStorage({...prevState,"todoList": todoList})
            return {...prevState,"todoList": todoList}
        case SET_INPUT_ACTIVE: 
        addTodoStorage({...prevState, "indexActive": action.payload})
            return {...prevState, "indexActive": action.payload}
        case CHANGE_TODO://{content, index}
            todoList = [...prevState.todoList]
            todoList[action.payload.index].content = action.payload.content
            addTodoStorage({...prevState,"todoList": todoList})
            return {...prevState,"todoList": todoList}
        default :
            return prevState
    }
}
export default todoReducer
export {todoInit}
