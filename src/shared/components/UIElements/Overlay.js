import React from "react"
import ReactDOM from "react-dom"

import "./Overlay.scss";

const Overlay = (props) => {
  	return ReactDOM.createPortal(
    	<div className="overlay" onClick={props.onClick}></div>, document.getElementById("overlay-hook")
  	)
}

export default Overlay