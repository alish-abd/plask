import React, { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import TickIcon from "../icons/TickIcon";
import TodoTickIcon from "../icons/TodoTickIcon";
import XIcon from "../icons/XIcon";
import "../Styles/Home.css";

function TodoList() {
  const initialState = JSON.parse(localStorage.getItem("todoList")) || [];

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]); //every time local todo list is changed its is updates in local storage and saved as string there

  useEffect(() => {
    setTodo("");
  }, [setTodo]);

  const onInputChange = (event) => {
    setTodo(event.target.value); //when input changes this changes are saved into todo item
  };

  const onFormSubmit = (event) => {
    event.preventDefault(); //prevents reloading the page on submit
    setTodoList([...todoList, { id: uuidV4(), title: todo, completed: false }]);
    setTodo("");
  };

  const handleComplete = (todo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          //maps over todo list, if id matches, completed value changes to true
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleDelete = ({ id }) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form className="todo-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Enter new task"
          value={todo}
          required
          onChange={onInputChange}
        />
        <button className="todo-button" type="submit">
          Add
        </button>
      </form>

      <div className="todo-items">
        {todoList.map((todo) => (
          <li className="todo-item">
            {!todo.completed ? (
              <button
                className="todo--box"
                onClick={() => handleComplete(todo)}
              ></button>
            ) : (
              <button
                className="todo--box-completed"
                onClick={() => handleComplete(todo)}
              >
                <TodoTickIcon />
              </button>
            )}
            <input
              type="text"
              value={todo.title}
              className={`todo-item-input ${todo.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />

            <button className="todo-delete" onClick={() => handleDelete(todo)}>
              <XIcon />
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
