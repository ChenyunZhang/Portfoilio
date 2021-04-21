import React, {useRef,useEffect} from 'react'

function Intro() {
    useEffect(() => {
        const handleScroll =e =>{
            console.log(window.scrollY,greetRef.current.offsetTop)
        }

        window.addEventListener("scroll",handleScroll)
    }, [])
    const greetRef = useRef(null)


    return (
        <div>
            <div className="intro-container">
                <div className="intro-greeting" ref={greetRef} >NICE TO MEET YOU</div>
            </div>
        </div>
    )
}

export default Intro
