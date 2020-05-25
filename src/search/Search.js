import React, {useContext, useEffect, useState} from "react"
import {Context} from "../shared/context/lang-context"

import NewsItem from "../news/components/NewsItem"

import "./Search.scss"

const Search = () => {
	const [term, setTerm] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [isLoaded, setIsLoaded] = useState(true)
	const {API_URL, currentLang} = useContext(Context)

	let news

	const handleChange = (event) => {
		const {value} = event.target
		setTerm(value)
	}
	const handleSearch = () => {
		setIsLoaded(false)
		fetch(`${API_URL}&q=${term}`)
		.then(response => response.json())
		.then(responseJson => responseJson.articles)
		.then(data => {
			setIsLoaded(true)
			setSearchResults(data)
		})
		.catch( error => {
      		console.error(error)
	    })
	}

	useEffect(() => {
		setIsLoaded(true)
		setSearchResults([])
		setTerm("")
	}, [currentLang])

	news = searchResults.map((item, index) => <NewsItem key={index} title={item.title} description={item.description} content={item.content} image={item.urlToImage} />)

	return (
		<div className="container">
			<h1>Search top news from <span>{currentLang}</span> by term:</h1>
			<input type="text" name="term" value={term} onChange={handleChange} onKeyUp={handleSearch} />
			<div className="list">
	        	{!isLoaded ? "Loading..." : news}
	        </div>
		</div>
	)
}

export default Search