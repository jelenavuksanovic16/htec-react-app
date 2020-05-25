import React from "react"
import ReactDOM from "react-dom"
import {CSSTransition} from "react-transition-group"

import "./MobileMenu.scss"

const MobileMenu = (props) => {
	const content = (
		<CSSTransition 
			in={props.show} 
			classNames="slide-in-left"
			timeout={200}
			unmountOnExit>
			<aside className="mobile-menu" onClick={props.onClick}>{props.children}</aside>
		</CSSTransition>
	)
	return ReactDOM.createPortal(content, document.getElementById("menu-hook"))
}

export default MobileMenu