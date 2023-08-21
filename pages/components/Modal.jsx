import React from 'react'
import { BiErrorCircle } from "react-icons/bi";
import s from "@/styles/Modal.module.scss";

export default function Modal({id,deleteTodo,closeModal}) {
  return (
    <div>
    <div>
      <div>
          <button onClick={()=> closeModal(false)}>x</button>
          <div><BiErrorCircle /></div>
          <div>
              <p>Do you want to delete</p>
          </div>
          <div>
              <button onClick={()=>deleteTodo(id)}>Yes</button>
              <button onClick={()=> closeModal(false)}>No</button>
          </div>
      </div>
    </div>
  </div>
  )
}
