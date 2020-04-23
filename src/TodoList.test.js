import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./TodoList";
import { deleteLabel } from "./Todo";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<TodoList />);

  // no remove button or a todo yet
  expect(queryByText(deleteLabel)).not.toBeInTheDocument();

  const message = getByLabelText("Message:");
  const submitBtn = queryByText("Add a Todo!");

  // fill out the form
  fireEvent.change(message, { target: { value: "first" } });
  fireEvent.click(submitBtn);

  // remove button and a todo exists!
  expect(queryByTestId("first")).toBeInTheDocument();
  expect(queryByTestId("firstRemove")).toBeInTheDocument();
});

it("can remove a corressponding todo", function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<TodoList />);

  // no remove button yet or todoes
  expect(queryByText(deleteLabel)).not.toBeInTheDocument();

  const message = getByLabelText("Message:");
  const submitBtn = queryByText("Add a Todo!");

  // Make two todos
  fireEvent.change(message, { target: { value: "first" } });
  fireEvent.click(submitBtn);

  fireEvent.change(message, { target: { value: "second" } });
  fireEvent.click(submitBtn);

  //remove red todo
  const removeBtn = queryByTestId("firstRemove");
  fireEvent.click(removeBtn);

  //red todo disappears and black todo stays
  expect(queryByTestId("first")).toBeNull();
  expect(queryByTestId("firstRemove")).toBeNull();
  expect(queryByTestId("second")).toBeInTheDocument();
  expect(queryByTestId("secondRemove")).toBeInTheDocument();
});
