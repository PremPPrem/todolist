import React, { useEffect, useState } from "react";
import s from "@/styles/TodoList.module.scss";
import { BsPlusCircleFill } from "react-icons/bs";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (title) {
      setErrorTitle("");
      const newTodo = {
        id: new Date().getTime().toString(),
        title,
        description,
      };
      setTodo([...todo, newTodo]);
      localStorage.setItem("todoList", JSON.stringify([...todo, newTodo]));
      setTitle("");
      setDescription("");
    } else if (!title) {
        setErrorTitle("Please enter a Title");
    }
  };

  const deleteTodo = (id) => {
    const deleteTodo = todo.filter((item)=>item.id !== id)
    localStorage.setItem("todoList", JSON.stringify(deleteTodo));
    setTodo(deleteTodo);
  };


  useEffect(() => {
    const saveTodo = JSON.parse(localStorage.getItem("todoList"));
    if (saveTodo) {
      setTodo(saveTodo);
    }
  }, []);


  return (
    <div>
      <h1>Todo List</h1>
      <div className="h">
        <form className="input" onSubmit={handleSubmit}>
          <div className="input-item">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <small className="alert">{errorTitle}</small>
          </div>
          <div className="input-item">
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="input-item">
            <button type="submit">
              <BsPlusCircleFill />
            </button>
          </div>
        </form>
        <div className="list">
          {todo.map((data) => {
            return <TodoItem key={data.id} {...data} deleteTodo={deleteTodo}  />
          })}
        </div>
      </div>
    </div>
  );
}
