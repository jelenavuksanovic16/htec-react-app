import React, {useState, useEffect, useContext} from "react"
import {useParams} from "react-router-dom"

import NewsItem from "../news/components/NewsItem"
import {Context} from "../shared/context/lang-context"

const Category = () => {
	const {slug} = useParams()
	const [categoryNews, setCategoryNews] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)
	const {currentLang, API_URL} = useContext(Context)

	let news

	useEffect(() => {
		setIsLoaded(false)
		fetch(`${API_URL}&category=${slug}`)
		.then(response => response.json())
		.then(responseJson => responseJson.articles)
		.then(data => {
			setIsLoaded(true)
			setCategoryNews(data)
		})
		.catch( error => {
      		console.error(error)
	    })
	}, [currentLang, slug])

	news = categoryNews.map((item, index) => <NewsItem key={index} title={item.title} description={item.description} image={item.urlToImage} content={item.content} />)

	return (
		<div className="container">
	        <h1>Top {slug} news from <span>{currentLang}</span></h1>
	        <div className="list">
	        	{!isLoaded ? "Loading..." : news}
	        </div>
		</div>
	)
}

export default Category