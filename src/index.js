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
import Particles from 'react-particles-js';


    // const particleOpt =  {
                                   
    //             particles: {
    //                 number: {
    //                     value: 150,
    //                     density: {
    //                         enable: true,
    //                         value_area: 800
    //                     }
    //         }
    //         }
    //         }
                                    
                                        
        
                                    



const App = () => {
    return (
        
        
            <div>
                <div className="page-wrapper">
                    <div className="page-content">
                        <Header />
                        <div className="content-wrapper">
                        {/* <Particles params={particleOpt}> */}
                            <Switch>
                                <Route exact path='/' component={Hello}></Route>
                                <Route exact path='/about' component={About}></Route>
                                <Route exact path='/projects' component={Projects}></Route>
                            </Switch>
                            {/* </Particles> */}
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