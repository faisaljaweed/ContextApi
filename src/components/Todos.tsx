import { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: "todo 1",
      id: 1,
    },
    {
      text: "todo 2",
      id: 2,
    },
    {
      text: "todo 3",
      id: 3,
    },
    {
      text: "todo 4",
      id: 4,
    },
    {
      text: "todo 5",
      id: 5,
    },
    {
      text: "todo 6",
      id: 6,
    },
  ]);
  const deleteItem = (itemId: number) => {
    const index = todos.findIndex(itemEl => itemEl.id === itemId);
    if (index === -1) {
      return;
    }
    todos.splice(index, 1);
    setTodos(todos);
  };

  const addNewTodo = () => {
    todos.unshift({
      text: "new Todo",
      id: Date.now(),
    });
    setTodos(todos);
  };

  return (
    <ul>
      <li>
        <button onClick={addNewTodo}>Click me to add new todo</button>
      </li>
      {todos.map((todoItem) => {
        return (
          <TodoItem key={todoItem.id} item={todoItem} onDelete={deleteItem} />
        );
      })}
    </ul>
  );
};

export default Todos;
