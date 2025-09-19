import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    { text: "Tailwind CSS To DO App List 1", completed: false },
    { text: "Tailwind CSS To DO App List 2", completed: true },
  ];

  return (
    <ul className="list-none">
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
}

export default TodoList;