import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    const [active, setActive] = useState(false)
    const handleClick = e => { setActive(!active) }
    const handleLink = e => { setActive(!active) }

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
                    <li className={active ? "nav-link fade" : "nav-link"}><Link to="project" onClick={handleLink}>PROJECT</Link></li>
                    <li className={active ? "nav-link fade" : "nav-link"}><Link to="work" onClick={handleLink}>WORK</Link></li>
                    <li className={active ? "nav-link fade" : "nav-link"}><Link to="blog" onClick={handleLink}>BLOG</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
