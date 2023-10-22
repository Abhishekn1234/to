import React, { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (task) {
      if (editingIndex !== null) {
       todos[editingIndex] = task;
        setEditingIndex(null);
      } else {
        setTodos([...todos, task]);
      }
      setTask("");
    }
  };
  const editTodo = (index) => {
    setTask(todos[index]);
    setEditingIndex(index);
  };
   const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setEditingIndex(null);
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" placeholder="Add a task"value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={addTodo}>{editingIndex !== null ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
            <input type="text"value={task}onChange={(e) => setTask(e.target.value)}/> ) : (todo)}
            {editingIndex === index ? (<button onClick={addTodo}>Save</button> ) : (
            <button onClick={() => editTodo(index)}>Edit</button>)}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
