import "./styles.css";
import TodoList from "./TodoList";

export default function App() {
  return (
    <>
      <div className="Application">
        <h1 className="Todoheader">Todo Planner</h1>
        <TodoList />
      </div>
    </>
  );
}
