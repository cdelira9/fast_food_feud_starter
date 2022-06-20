import * as React from "react"
import "./Instructions.css"

export function Instructions({inst}) {
  return (
    <aside className="instructions">
      <p className="inst">{inst.start}</p>
    </aside>
  )
}

export default Instructions
