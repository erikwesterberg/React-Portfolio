import React from "react"
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
return (
    <nav className="header-wrapper">
        <h1 className="header-title">
            <Link className="text-white hover:text-grey no-underline" to='/'>ERK THE WEBCRAWLER</Link>
        </h1>
        <ul className="list-reset flex">
            <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/worklife'>Worklife</NavLink></li>
            <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/contact'>Contact</NavLink></li>
            <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
            <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
        </ul>
    </nav>
)
}

export default Header