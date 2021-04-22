import React from 'react'

function Footer() {
    return (
        <>
            <div className="social-buttons">
                <a target="_blank" href="https://www.linkedin.com/in/chenyun-zhang/" className="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                    <span className="social-button__inner">
                    <i className="fa fa-linkedin"></i>
                    </span>
                </a>
                <a target="_blank" href="https://twitter.com/Ttrazcy" className="social-buttons__button social-button social-button--snapchat" aria-label="SnapChat">
                    <span className="social-button__inner">
                    <i className="fa fa-twitter"></i>
                    </span>
                </a>
                <a target="_blank" href="https://github.com/chenyunzhang" className="social-buttons__button social-button social-button--github" aria-label="GitHub">
                    <span className="social-button__inner">
                    <i className="fa fa-github"></i>
                    </span>
                </a>
                <a target="_blank" href="https://medium.com/@morningchenyun" className="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
                    <span className="social-button__inner">
                    <i className="fa fa-medium"></i>
                    </span>
                </a>
                </div>
        </>
    )
}

export default Footer
