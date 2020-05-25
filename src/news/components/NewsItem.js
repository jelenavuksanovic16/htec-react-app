import React, {useState} from 'react'

import Modal from "../../shared/components/UIElements/Modal"

import "./NewsItem.scss"

const NewsItem = (props) => {
	const [showModal, setShowModal] = useState(false)

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
			<div className="item">
	            <div className="img-wrapper">
	            	<h3>{props.title}</h3>
		            <img src={props.image} alt="" />
		       	</div>
	            <p>{props.description}</p>
	            <div className="btn-wrapper">
		            <button onClick={() => setShowModal(true)}>Read more</button>
		       	</div>
			</div>
		</React.Fragment>
	)
}

export default NewsItem
