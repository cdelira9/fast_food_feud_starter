import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, iClick = () => {} }) {
  function handleClick(){
    isActive = true;
  }
  var buttonClassName;
  if(isActive == false){
    buttonClassName = "chip";
  }
  if(isActive == true){
    buttonClassName = "chip active";
  }
  return (
    <button onCLick={handleClick} className={buttonClassName} onClick={iClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>

  )
}

export default Chip
