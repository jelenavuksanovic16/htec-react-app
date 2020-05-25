import React, {useContext, useState} from "react"
import {NavLink} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Context} from "../context/lang-context"

import MobileMenu from "./MobileMenu"
import Overlay from "./UIElements/Overlay"

import "./Header.scss"

const Header = () => {
	const {currentLang, changeLang} = useContext(Context)
	const [mobileMenuShow, setMobileMenuShow] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuShow(prevState => !prevState)
	}

	const closeMobileMenu = () => {
		setMobileMenuShow(false)
	}

	return (
		<React.Fragment>
			{mobileMenuShow && <Overlay onClick={closeMobileMenu} />}
			<MobileMenu show={mobileMenuShow} onClick={closeMobileMenu}>
				<nav>
					<ul>
						<li><NavLink exact to="/">Top News</NavLink></li>
						<li><NavLink to="/categories">Categories</NavLink></li>
						<li><NavLink to="/search">Search</NavLink></li>
					</ul>
				</nav>
			</MobileMenu>

			<header>
				<div className="container">
					<button className="menu-trigger" onClick={toggleMobileMenu}>
						<FontAwesomeIcon icon={faBars} />
					</button>
					<nav>
						<ul>
							<li><NavLink exact to="/">Top News</NavLink></li>
							<li><NavLink to="/categories">Categories</NavLink></li>
							<li><NavLink to="/search">Search</NavLink></li>
						</ul>
					</nav>
					<div className="lang">
						<button 
							className={currentLang === "us" ? "active" : ""}
							onClick={() => changeLang("us")}>
							US</button>
						<button 
							className={currentLang === "gb" ? "active" : ""}
							onClick={() => changeLang("gb")}>
							GB</button>
					</div>
				</div>
			</header>
		</React.Fragment>
	)
}

export default Header