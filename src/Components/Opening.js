import React from 'react'
// import Footer from "./Footer"
import resume from "../resume.pdf"
function Opening() {
  return (
    <>
      <div className="open-image">
        <div className="open-text">
          <div>
            <span className="letter">C</span>
            <span className="letter">H</span>
            <span className="letter">E</span>
            <span className="letter">N</span>
            <span className="letter">Y</span>
            <span className="letter">U</span>
            <span className="letter">N</span>
          </div>
          <div className="open-title">Software Engineer</div>
          <div className="open-description"> I build full-stack applications, write tech blogs, love reading</div>
          <div>
            <ul className="social-icons">
              <li className="social-icon"><a className="github" target="_blank" href="https://github.com/chenyunzhang"><i className="fa fa-github"></i><span>Github</span></a></li>
              <li className="social-icon"><a className="twitter" target="_blank" href="https://twitter.com/Ttrazcy"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
              <li className="social-icon"><a className="linkedin" target="_blank" href="https://www.linkedin.com/in/chenyun-zhang/"><i className="fa fa-linkedin"></i><span>Linkedin</span></a></li>
              <li className="social-icon"><a className="medium" target="_blank" href="https://medium.com/@morningchenyun"><i className="fa fa-medium"></i><span>Medium</span></a></li>
              <li className="social-icon"><a className="resume" target="_blank" href={resume} download><i class="fa fa-file"></i><span>Resume</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="coming-soon">COMING SOON</div>
    </>
  )
}

export default Opening
