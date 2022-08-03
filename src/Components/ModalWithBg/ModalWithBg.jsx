import React from 'react'
import "./ModalWithBg.css";

export default function ModalWithBg({ open, toggleOpen, children }) {
  return (
    <>
      <div className={`modal ${!open && "hide"}`}>{children}</div>
      <div
        className={`modal-bg ${!open && "hide"}`}
        onClick={() => toggleOpen(!open)}
      ></div>
    </>
  );
}
