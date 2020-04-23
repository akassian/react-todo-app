import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/v4";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const renderedTodoList = () => {
    return (
      <ol>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            message={todo.message}
            remove={remove}
            updateTodo={updateTodo}
            toggleIsEdit={toggleIsEdit}
            isEdit={isEdit}
          />
        ))}
      </ol>
    );
  };

  /** Add a new todo. */

  const addTodo = (todo) => {
    let newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };

  /** Remove a todo. */

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // /** Update a todo. */

  const updateTodo = (id, message) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, message } : todo))
    );
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="TodoList">
      {isEdit ? <h1>Edit Todo List!</h1> : <h1>Add to Todo List!</h1>}
      <NewTodoForm addTodo={addTodo} />
      {renderedTodoList()}
    </div>
  );
}

export default TodoList;
