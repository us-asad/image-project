import React from 'react'
import "./Loader.css";

export default function Loader({ loaded }) {
  return (
    <div className={`loader-container ${loaded ? "hide" : null}`}>
      <div className="lds-hourglass"></div>
    </div>
  )
}
