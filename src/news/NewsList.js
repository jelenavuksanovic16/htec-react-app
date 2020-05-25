import React, {useEffect, useState, useContext} from "react"

import NewsItem from "./components/NewsItem"
import {Context} from "../shared/context/lang-context"

import "./NewsList.scss"

const NewsList = () => {
	const [topNews, setTopNews] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)
	const {currentLang, API_URL} = useContext(Context)

	let news

	useEffect(() => {
		setIsLoaded(false)
		fetch(API_URL)
		.then(response => response.json())
		.then(responseJson => responseJson.articles)
		.then(data => {
			setIsLoaded(true)
			setTopNews(data)
		})
		.catch( error => {
      		console.error(error)
	    })
	}, [currentLang])

	news = topNews.map((item, index) => <NewsItem key={index} title={item.title} description={item.description} image={item.urlToImage} content={item.content} />)

	return (
		<div className="container">
	        <h1>Top news from <span>{currentLang}</span></h1>
	        <div className="list">
	        	{!isLoaded ? "Loading..." : news}
	        </div>
		</div>
	)
}

export default NewsList