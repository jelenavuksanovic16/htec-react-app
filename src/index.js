import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"
import {LangContextProvider as Provider} from "./shared/context/lang-context"
import App from './App'

ReactDOM.render(<Provider><Router><App /></Router></Provider>, document.getElementById('root'));