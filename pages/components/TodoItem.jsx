import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import Modal from "./Modal";

export default function TodoItem({ title, description, id, deleteTodo }) {
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
          <p>status : complete</p>
        </div>
        <div className="btn">
          <AiOutlineDelete
            className="icon"
            onClick={() => setOpenModal(true)}
          />
          <AiOutlineCheckCircle className="icon" />
        </div>
      </div>
    </>
  );
}
