import React, { useState } from "react";

/** Form for creating a new todo to add to a list of todos.
 *
 * Has state for the message of the item; on submission,
 * sends {message} to fn rec'd from parent.
 *
 */

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { message: "" };
  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // isEdit ? updateTodo(formData) : addTodo(formData);
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <button>Add a Todo!</button>
    </form>
  );
};

export default NewTodoForm;
