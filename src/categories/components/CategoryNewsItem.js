import React, {useState, useEffect} from "react"
import {CSSTransition} from "react-transition-group"

import Modal from "../../shared/components/UIElements/Modal"

import "./CategoryNewsItem.scss"

const CategoryNewsItem = (props) => {
	const [showNews, setShowNews] = useState(false)
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		setShowNews(true)
	}, [props])

	return (
		<React.Fragment>
			<Modal 
				show={showModal} 
				header="News"
				onCancel={() => setShowModal(false)}
				>
				<div className="news-modal-wrapper">
					<h2>{props.title}</h2>
		            <img src={props.image} alt="" />
		            <p>{props.content}</p>
				</div>
			</Modal>
			<CSSTransition 
				in={showNews} 
				classNames={props.animationClass}
				timeout={200}
				mountOnEnter
				unmountOnExit>
				<div className="category-news-item">
					<div className={`img-wrapper ${!props.image && 'no-img'}`}>
						<h3>{props.title}</h3>
						{
							props.image &&
							<img src={props.image} alt="" />
						}
					</div>
					<p>{props.description}</p>
					<div className="btn-wrapper">
			            <button onClick={() => setShowModal(true)}>Read more</button>
			       	</div>
				</div>
			</CSSTransition>
		</React.Fragment>
	)
}

export default CategoryNewsItem