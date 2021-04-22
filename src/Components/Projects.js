import React from 'react'
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <>
            <div className="project-wrapper">
                <div className="cards">
                    <a target="_blank" href="https://github.com/ChenyunZhang/Mod1-Ruby-CLI_project1" className="card">
                        <div className="social-buttons">
                        <a target="_blank" href="https://github.com/chenyunzhang" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                            <span className="social-button__inner">
                            <i className="fa fa-github"></i>
                            </span>
                        </a>
                        </div>
                    </a>
                    <a target="_blank" href="https://github.com/ChenyunZhang/codera" className="card"></a>
                    <a target="_blank" href="https://github.com/ChenyunZhang/rotten_potato.github.io" className="card"></a>
                    <a target="_blank" href="https://github.com/ChenyunZhang/shared.github.io" className="card"></a>
                    <a target="_blank" href="https://github.com/ChenyunZhang/mod5-project-frontend" className="card"></a>
                </div>
            </div>
        </>
    )
}

export default Projects
