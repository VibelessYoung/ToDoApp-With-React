function TodoItem({ todo, deleteTodo}) {
  return (
    <li className="relative flex items-center justify-between px-2 py-4 border-b">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>{}}
        />
        <p
          className={`inline-block mt-1 ml-2 text-gray-600 ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.text}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        type="button"
        className="absolute right-0 flex items-center space-x-1"
      >
        {/* Delete Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-red-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;