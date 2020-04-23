import React, { useState } from "react";
import UpdateTodoForm from "./UpdateTodoForm";

const deleteLabel = "X";

function Todo({ id, message, remove, toggleIsEdit, updateTodo, isEdit }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <li data-testid={`${message}`}>
      {isDone ? (
        <p>
          <s>{message}</s>
        </p>
      ) : (
        <p>{message}</p>
      )}

      <button
        data-testid={`${message}Remove`}
        style={{ marginLeft: 10 }}
        onClick={(evt) => remove(id)}
      >
        {deleteLabel}
      </button>
      <button
        data-testid={`${message}Edit`}
        style={{ marginLeft: 10 }}
        onClick={(evt) => toggleIsEdit()}
      >
        Edit
      </button>
      {isEdit ? (
        <UpdateTodoForm updateTodo={updateTodo} message={message} id={id} />
      ) : null}
      <input
        id="done"
        type="checkbox"
        checked={isDone}
        onChange={(evt) => setIsDone(!isDone)}
      />
    </li>
  );
}

export default Todo;
export { deleteLabel };
