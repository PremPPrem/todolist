import React, { useEffect, useState } from "react";
import s from "@/styles/TodoList.module.scss";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";

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
          {/* <div className="list-item">
                <h3>Task 1</h3>
                <p>Description</p>
            </div> */}
          {todo.map((data) => {
            return (
              <div className="list-item" key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="btn">
                  <AiOutlineDelete className="icon"  />
                  <AiOutlineCheckCircle className="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
