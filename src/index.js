import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import Contact from "./contact"
import Worklife from "./worklife"
import './css/tailwind.css';
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import { Switch, Route } from 'react-router-dom'



                 

const App = () => {
    return (
        
        
            <div>
                <div className="page-wrapper">
                    <div className="page-content">
                        <Header />
                        <div className="content-wrapper">
                            <Switch>
                                <Route exact path='/' component={Hello}></Route>
                                <Route exact path='/worklife' component={Worklife}></Route>
                                <Route exact path='/contact' component={Contact}></Route>
                                <Route exact path='/about' component={About}></Route>
                                <Route exact path='/projects' component={Projects}></Route>
                            </Switch>
                        
                        </div>
                        <Footer />
                        </div >
                </div>    
            </div >
            
      

    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"))