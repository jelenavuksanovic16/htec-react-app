import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import Header from "./shared/components/Header"
import NewsList from "./news/NewsList"
import CategoriesList from "./categories/CategoriesList"
import Category from "./categories/Category"
import Search from "./search/Search"

import "./App.scss"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/"><NewsList /></Route>
        <Route path="/categories"><CategoriesList /></Route>
        <Route path="/category/:slug"><Category /></Route>
        <Route path="/search"><Search /></Route>
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  )
}

export default App
