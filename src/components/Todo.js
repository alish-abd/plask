import React, { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import "../Styles/Home.css";

function Todo() {
  //getting item from local storage
  //if local storage is empty we retrieve an empty array instead of undefined
  const initialState = JSON.parse(localStorage.getItem("todoList")) || [];

  const [todo, setTodo] = useState(""); //state of single todo item
  const [todoList, setTodoList] = useState(initialState); //state of todo list
  const [editTodo, setEditTodo] = useState(null); //state of editing todo item

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]); //every time local todo list is changed its is updates in local storage and saved as string there

  const updateTodo = (title, id, completed) => {
    const newTodo = todoList.map(
      (todo) => (todo.id === id ? { title, id, completed } : todo)
      //maps over todo items and if its id is equal to id of item in list, it replaces that item in list
    );
    setTodoList(newTodo); // todo list state is updated by adding this new todo
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setTodo(editTodo.title);
    } else {
      setTodo("");
    }
  }, [setTodo, editTodo]);

  const onInputChange = (event) => {
    setTodo(event.target.value); //when input changes this changes are saved into todo item
  };

  const onFormSubmit = (event) => {
    event.preventDefault(); //prevents reloading the page on submit
    if (!editTodo) {
      //if editTodo is false, todo list is saved with inputted values
      setTodoList([
        ...todoList,
        { id: uuidV4(), title: todo, completed: false },
      ]);
      setTodo("");
    } else {
      updateTodo(todo, editTodo.id, editTodo.completed); //if editTodo is true, the values are updated by updateTodo function
    }
  };

  const handleComplete = (todo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === item.id) {
          //maps over todo list, if id matches, completed value changes to true
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todoList.find((todo) => todo.id === id);
    setEditTodo(findTodo); //finds the item with the same id
  };

  const handleDelete = ({ id }) => {
    //filters down the element that pass the test of id (all elemens having this id are filtered out)
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          className="todo-input"
          value={todo}
          required
          onChange={onInputChange}
        ></input>
        <button className="todo-add-button" type="submit">
          {editTodo ? "Save" : "Add"}
        </button>
      </form>

      <div className="todo-items">
        {todoList.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <button onClick={handleComplete}>Complete</button>
            <input
              type="text"
              value={todo.title}
              className={`todo-list ${todo.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            <div>
              <button onClick={() => handleDelete(todo)}>Delete</button>
              <button onClick={() => handleEdit(todo)}>Edit</button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
