import { useState } from "react";

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
  ]);
  const deleteItem = () => {
    // which item should we delete? How to know that?
    setTodos(todos);
  }
  return (
    <ul>
      {todos.map((todoItem) => {
        return <li onClick={deleteItem} key={todoItem.id}>
          {todoItem.text}
        </li>
      })}
    </ul>
  );
};

export default Todos;
