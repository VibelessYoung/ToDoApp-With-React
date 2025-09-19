import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3 bg-white">
          <Header />
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;