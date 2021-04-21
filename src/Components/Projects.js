import React from 'react'
import Footer from "./Footer"

function Projects() {
    return (
        <>
            <div className="project-wrapper">
                <div className="cards">
                    <div className="card">
                        <div className="project-1-content">
                        Movie Mate is a CLI app that allows users to manage their movie reviews, read other users reviews for the movies, and browser over a hundred in theater movies. 
                        </div>
                        <div className="project-1-img"></div>
                    </div>
                    <div className="card">
                        <div className="project-2-content">
                        Codera is a full stack ruby application. It's a Q&A platform that allows users to share and grow their coding knowledges. After create an account with Codera. Users can ask or answer coding questions to their fellow developers for different programming languages or topics. Users can easily manage their answered or posted questions in their home page.
                        </div>
                        <div className="project-2-img"></div>
                    </div>
                    <div className="card">
                        <div className="project-3-content">
                        Rotten Potatoes is New Yorkers' local guide to discover the best restaurants around you. Rotten Potatoes is implemented with zomato API, users can search the restaurants with location or name with ease. Users can also check out the restaurants reviews from other users. Leave reviews to the restaurants they've been to.
                        </div>
                        <div className="project-3-img"></div>
                    </div>
                    <div className="card">
                        <div className="project-4-content">
                        Shared is a social media app that empowers users to connect with their friends, family, or people who shares the same interest with you. Once registered with Shared. Users can read the trending news from their home page, latest posts from other users, follow other users with one click, and also share their moments with other users. 
                        </div>
                        <div className="project-4-img"></div>
                    </div>
                    <div className="card">
                        <div className="project-5-content">
                        Read It is designed for reader to shared their thought for the books they've or find out how other readers think for the book. User can read the book description without login. Users can easily login with their google account to review the books, or vote for other readers' reviews. Read It also enabled "forgot password" feature for users to retrieve their accounts back.
                        </div>
                        <div className="project-5-img"></div>
                    </div>
                </div>
                <div className="project-footer">
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects
