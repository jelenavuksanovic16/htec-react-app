import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../../shared/context/lang-context"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowUp, faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'

import CategoryNewsItem from "./CategoryNewsItem"

import "./CategoryItem.scss"

const CategoryItem = (props) => {
	const [isLoaded, setIsLoaded] = useState(true)
	const [expanded, setExpanded] = useState(false)
	const [currentNews, setCurrentNews] = useState(0)
	const [categoryNews, setCategoryNews] = useState([])
	const {API_URL, currentLang} = useContext(Context)
	const [animationClass, setAnimationClass] = useState("slide-in-left")

	let news

	useEffect(() => {
		if(expanded){
			setIsLoaded(false)
			fetch(`${API_URL}&category=${props.title}`)
			.then(response => response.json())
			.then(responseJson => responseJson.articles)
			.then(data => {
				setIsLoaded(true)
				setCategoryNews(data)
			})
			.catch( error => {
	      		console.error(error)
		    })
		}
		else{
			setCategoryNews([])
			setCurrentNews(0)
		}
	}, [expanded])

	useEffect(() => {
		setExpanded(false)
		setCategoryNews([])
		setCurrentNews(0)
	}, [currentLang])

	const toggleNews = () => {
		setExpanded(prevExpanded => !prevExpanded)
	}

	const showPreviousNews = () => {
		setAnimationClass("slide-in-left")
		setCurrentNews(prevNews => prevNews - 1)
	}
	const showNextNews = () => {
		setAnimationClass("slide-in-right")
		setCurrentNews(prevNews => prevNews + 1)
	}

	news = categoryNews.map((item, index) => <CategoryNewsItem key={index} title={item.title} image={item.urlToImage} content={item.content} animationClass={animationClass}/>)

	return (
		<div className="category-item">
			<h1>
				<Link to={`/category/${props.title}`}>{props.title}</Link>
				<button onClick={toggleNews}>
					<FontAwesomeIcon icon={expanded ? faArrowUp : faArrowDown} />
				</button>
			</h1>
			<div className={`news-slider ${expanded && 'expanded'}`}>
				{
					(expanded && currentNews) > 0 &&
					<button className="slider-btn" onClick={showPreviousNews}>
						<FontAwesomeIcon icon={faCaretLeft} />
					</button>
				}
				{(expanded && !isLoaded) ? "Loading..." : news[currentNews]}
				{
					(expanded && currentNews) < news.length &&
					<button className="slider-btn" onClick={showNextNews}>
						<FontAwesomeIcon icon={faCaretRight} />
					</button>
				}
			</div>
		</div>
	)
}

export default CategoryItem