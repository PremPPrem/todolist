import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import s from "@/styles/Modal.module.scss";

export default function Modal({id,deleteTodo,closeModal}) {
  return (
    <div className={s.modal}>
    <div className={s.modal_header}>
      <div className={s.modal_content}>
          <button onClick={()=> closeModal(false)} className={s.modal_btn_x}>x</button>
          <div className={s.modal_icon}><AiOutlineCloseCircle /></div>
          <div className={s.modal_title}>
              <p>Do you want to delete</p>
          </div>
          <div className={s.modal_button}>
              <button onClick={()=>deleteTodo(id)} className={`${s.modal_btn_yes} btn btn_success`}>Yes</button>
              <button onClick={()=> closeModal(false)} className={`${s.modal_btn_no} btn btn_danger`}>No</button>
          </div>
      </div>
    </div>
  </div>
  )
}
