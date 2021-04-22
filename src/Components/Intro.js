import React from 'react'

function Intro() {
    return (
        <>
        <div>Nice to meet you</div>
        <div className="intro-wrapper">
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    {/* <img src={img2} alt=""/> */}
                </div>
                <div className="contentBx">
                    <h2>FRONDEND</h2>
                    <p>abc</p>
                    <a href="#"><span>Read More</span></a>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    {/* <img src={img1} alt=""/> */}
                </div>
                <div className="contentBx">
                    <h2>BACKEND</h2>
                    <p>abc</p>
                    <a href="#"><span>Read More</span></a>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    {/* <img src={img} alt=""/> */}
                </div>
                <div className="contentBx">
                    <h2>DESIGN</h2>
                    <p>abv!</p>
                    <a href="#"><span>Read More</span></a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Intro
