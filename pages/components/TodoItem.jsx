import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import Modal from "./Modal";
import parse from "html-react-parser";
import s from "@/styles/TodoItem.module.scss";

export default function TodoItem({
  title,
  description,
  id,
  deleteTodo,
  completeTodo,
  complete,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {openModal && (
        <Modal closeModal={setOpenModal} id={id} deleteTodo={deleteTodo} />
      )}
      <div className={s.item}>
        <div className={s.item_header}>
          <h3>{title}</h3>
          <p>
            {readMore
              ? parse(description)
              : parse(description.substring(0, 250))}
          
          </p>
          <button
              className={s.item_button}
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {description?.length <= 250
                ? ""
                : readMore
                ? " . . . Read Less"
                : " . . . Read More"}
            </button>

          <div className={s.line}></div>
          <div
            className={
              complete === true
                ? `${s.item_status}`
                : `${s.item_status} ${s.item_status_active}`
            }
          >
            <p>
              <span>Status :</span>
              {complete === true ? "Complete" : "No Complete"}
            </p>
          </div>
          <div className={s.item_icon}>
            <button
              className={`${s.item_icon_delete} btn btn_danger`}
              onClick={() => setOpenModal(true)}
            >
              <AiOutlineDelete />
            </button>
            <button
              onClick={() => completeTodo(id)}
              className={
                complete === true
                  ? `${s.item_icon_check} btn btn_success`
                  : `${s.item_icon_check} btn btn_secondary`
              }
            >
              <AiOutlineCheckCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
