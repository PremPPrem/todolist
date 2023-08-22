import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import Modal from "./Modal";

export default function TodoItem({ title, description, id, deleteTodo,completeTodo,complete }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && (
        <Modal closeModal={setOpenModal} id={id} deleteTodo={deleteTodo} />
      )}
      <div className="list-item">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <p>Status : {complete === true ? "Complete" : "No Complete"}</p>
        </div>
        <div className="">
          <AiOutlineDelete
            className="icon"
            onClick={() => setOpenModal(true)}
          />
          <AiOutlineCheckCircle className="icon" onClick={() => completeTodo(id)} />
        </div>
      </div>
    </>
  );
}
