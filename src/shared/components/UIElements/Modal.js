import React from "react"
import ReactDOM from "react-dom"
import {CSSTransition} from "react-transition-group"

import Overlay from "./Overlay"

import "./Modal.scss"

const ModalOverlay = props => {
	const content = (
		<div className="modal">
			<header className="modal-header">
				<h2>{props.header}</h2>
			</header>
			<div className="modal-content">
				{props.children}
			</div>
		</div>
	)
	return ReactDOM.createPortal(content, document.getElementById("modal-hook"))
}

const Modal = props => {
	return (
		<React.Fragment>
			{props.show && <Overlay onClick={props.onCancel} />}
			<CSSTransition 
				in={props.show} 
				classNames="modal"
				timeout={200}
				mountOnEnter
				unmountOnExit>
				<ModalOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	)
}

export default Modal