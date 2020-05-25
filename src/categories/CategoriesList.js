import React, {useContext} from "react"

import CategoryItem from "./components/CategoryItem"
import {Context} from "../shared/context/lang-context"

import "./CategoriesList.scss"

const allCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

const CategoriesList = () => {
	const {currentLang} = useContext(Context)
	const categories = allCategories.map((category, index) => <CategoryItem key={index} title={category} />)

	return (
		<div className="container">
			<h1>Top 5 news by categories from <span>{currentLang}</span></h1>
			{categories}
		</div>
	)
}

export default CategoriesList