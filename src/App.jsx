import { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { text: "Tailwind CSS To DO App List 1", completed: false },
    { text: "Tailwind CSS To DO App List 2", completed: true },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3 bg-white">
          <Header />
          <TodoInput addTodo={addTodo} />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;