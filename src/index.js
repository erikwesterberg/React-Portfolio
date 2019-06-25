import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import './css/tailwind.css';
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div className="content-wrapper">
            <div className="flex mb-4">
                <div className="w-1/4">
                    <UndrawDashboard />
                </div>
                <div className="w-3/4">
                    <h1>My Projects</h1>
                    <p>This is a selection of some of my projects I have been working on.</p>
                </div>

            </div>

            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {projectsList}
            </div>
        </div>
    )
};

// ReactDOM.render(<App />, document.getElementById("app"))

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));