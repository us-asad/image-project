import React from 'react'
import "./ModalWithBg.css";
import { RiCloseLine } from "react-icons/ri"

export default function ModalWithBg({ open, toggleOpen, children }) {
  return (
    <div className={`modal-container ${!open && "hide"}`}>
      <div className={`modal`}>
        {children}
        <button onClick={() => toggleOpen(false)} className='modal-close'>
          <RiCloseLine style={{color: "#fff"}} />
        </button>
      </div>
      <div
        className={`modal-bg ${!open && "hide"}`}
        onClick={() => toggleOpen(false)}
      ></div>
    </div>
  );
}
