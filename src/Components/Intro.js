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
                    <p>任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!</p>
                    <a href="#"><span>Read More</span></a>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    {/* <img src={img1} alt=""/> */}
                </div>
                <div className="contentBx">
                    <h2>BACKEND</h2>
                    <p>任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!</p>
                    <a href="#"><span>Read More</span></a>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    {/* <img src={img} alt=""/> */}
                </div>
                <div className="contentBx">
                    <h2>DESIGN</h2>
                    <p>任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!</p>
                    <a href="#"><span>Read More</span></a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Intro
