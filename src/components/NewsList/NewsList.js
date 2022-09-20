import React from "react";
import './NewsList.css';

const NewsList = ({newsData}) => {
    console.log(newsData)
    const news = newsData.map((news)=> {
        if(news.title === ''|| news.title === 'Sign Up for the Science Times Newsletter') {
            return null
        }
        return (
            <section className="news_section" key={news.created_date}>
                <img src={news.multimedia[1].url} className='news_section-img'/>
                <h2>{news.title}</h2>
                <p>{news.published_date}</p>
                <p>{news.section}</p>
                <p>{news.abstract}</p>
                <button>Read more</button>
            </section>
        )
    })

    return (
        <div className="news">{news}</div>
    )
}

export default NewsList;