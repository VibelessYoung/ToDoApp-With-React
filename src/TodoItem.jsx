import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    if (e.key === "Enter" && editText.trim() !== "") {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="relative flex items-center justify-between px-2 py-4 border-b">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleSave}
            className="ml-2 border rounded px-1"
            autoFocus
          />
        ) : (
          <p
            className={`inline-block mt-1 ml-2 text-gray-600 ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.text}
          </p>
        )}
      </div>

      <div className="absolute right-0 flex items-center space-x-2">
        {/* دکمه Edit */}
        <button onClick={handleEdit} className="text-blue-600">
          <Pencil size={20} />
        </button>

        {/* دکمه Delete */}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-700">
          <Trash2 size={20} />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;