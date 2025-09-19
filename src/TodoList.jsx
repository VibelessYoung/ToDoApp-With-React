import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul className="list-none">
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
}

export default TodoList;