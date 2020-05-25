import React, {createContext, useState} from "react"

const Context = createContext()

const LangContextProvider = ({children}) => {
	const [currentLang, setCurrentLang] = useState("us")
	const API_URL = `/top-headlines?country=${currentLang}&apiKey=4067065307d84926bd1c9e40feae6951`

	const changeLang = (lang) => {
		setCurrentLang(lang)
	}

	return (
		<Context.Provider value={{currentLang, changeLang, API_URL}}>
			{children}
		</Context.Provider>
	)
}

export {LangContextProvider, Context}