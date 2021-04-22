import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./Components/Nav"
import Projects from "./Components/Projects"
import Blogs from "./Components/Blogs"
import Works from "./Components/Works"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Open from "./Components/Opening"
import Intro from "./Components/Intro"
import Explore from "./Components/Explore"
import Error from "./Components/Error"

function App(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Open />
            <Intro />
            <Explore />
            <Home />
          </Route>

          <Route exact path="/project">
            <Nav />
            <Projects />
            <Footer/>
          </Route>

          <Route exact path="/work">
            <Nav />
            <Works />
            <Footer/>
          </Route>

          <Route exact path="/blog">
            <Nav />
            <Blogs />
            <Footer/>
          </Route>
          <Route> 
            <Error/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
