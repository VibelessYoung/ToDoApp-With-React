import { useState } from "react";

function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done today?"
        className="w-full px-2 py-3 border rounded outline-none border-gray-600"
      />
    </div>
  );
}

export default TodoInput;