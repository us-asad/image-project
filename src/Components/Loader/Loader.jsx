import React from 'react'

export default function Loader() {
  return (
    <div style={{height: "100vh", display: "grid", placeContent: "center"}}>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
