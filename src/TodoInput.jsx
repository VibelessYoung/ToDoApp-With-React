function TodoInput() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What needs to be done today?"
        className="w-full px-2 py-3 border rounded outline-none border-gray-600"
      />
    </div>
  );
}

export default TodoInput;