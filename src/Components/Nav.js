import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const [active, setActive] = useState(false)
    const handleClick = e => { setActive(!active) }

    return (
        <>
            <nav id="nav-bar">
                <div className="hamburger" onClick={handleClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <a className="brand" href="/">HOME</a>
                <ul className={active ? "nav-links open" : "nav-links"}>
                    <li className={active ? "nav-link fade" : "nav-link"}><Link to="project">PROJECT</Link></li>
                    <li className={active ? "nav-link fade" : "nav-link"}><Link to="work">WORK</Link></li>
                    <li className={active ? "nav-link fade" : "nav-link"}><Link to="blog">BLOG</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
