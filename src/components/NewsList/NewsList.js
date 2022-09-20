import React from "react";
import './NewsList.css';
import { Link } from "react-router-dom";

const NewsList = ({newsData}) => {
    const news = newsData.map((news)=> {
        if(news.title === ''|| news.title === 'Sign Up for the Science Times Newsletter') {
            return null
        }
        return (
            <Link to={`/article/${news.title}`} key={news.created_date}>
                <section className="news_section">
                    <img src={news.multimedia[1].url} className='news_section-img'/>
                    <h2>{news.title}</h2>
                </section>
            </Link>
        )
    })

    return (
        <div className="news">{news}</div>
    )
}

export default NewsList;