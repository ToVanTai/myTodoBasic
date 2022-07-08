import "./App.css";
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";
function App() {
    return (
        <div className="app">
            <h2>Wellcomw to Todo App</h2>
            <TodoInput />
            <b>My Todo Tasks</b>
            <TodoList />
        </div>
    );
}

export default App;
