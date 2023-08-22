import React, { useEffect, useState } from "react";
import s from "@/styles/TodoList.module.scss";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorTitle("");
    if (title) {
      const newTodo = {
        id: uuidv4(),
        title,
        description,
        complete: false,
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
    const deleted = todo.filter((item) => item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(deleted));
    setTodo(deleted);
  };

  const completeTodo = (id) => {
    const complete = [...todo].map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    localStorage.setItem("todoList", JSON.stringify(complete));
    setTodo(complete);
  };

  const clear = () => {
    setTodo([]);
    localStorage.removeItem("todoList");
  };

  useEffect(() => {
    const saveTodo = JSON.parse(localStorage.getItem("todoList"));
    if (saveTodo) {
      setTodo(saveTodo);
    }
  }, []);

  return (
    <div>
      <h1 className={s.title_header}>Todo List</h1>
      <div className={s.list_header}>
        <form className="input" onSubmit={handleSubmit}>
          <div className={s.list_input_item}>
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className={errorTitle === "" ? `${s.list_input}` : `${s.list_input} ${s.list_input_active}`}
            />
            <small className="alert">{errorTitle}</small>
          </div>
          <div className={s.list_input_item}>
            <label>Description</label>
            <div className={s.list_description}>
              <ReactQuill
                value={description}
                onChange={(e) => setDescription(e)}
              />
            </div>
          </div>

          <button type="submit" className={`${s.list_button} btn btn_success`}>
            <BsPlusCircleFill /> Add
          </button>
        </form>

        <button onClick={clear} className={`${s.list_button} btn btn_danger`}>
          <AiOutlineClear /> Delete All
        </button>

        <div>
          {todo.map((data) => {
            return (
              <TodoItem
                key={data.id}
                {...data}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
