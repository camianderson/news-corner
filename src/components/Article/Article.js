import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';


const Article = ({news, activate}) => {
    const date = news.published_date.substring(news.published_date.length - 15, news.published_date).split('-')
    const correctDate = date[1] + '/' + date[2] + '/' + date[0]
    

    return (
        <div className="article">
            <img src={news.multimedia[1].url} className='news_section-img' alt={news.multimedia[1].caption}/>
            <h2>{news.title}</h2>
            <div className='article-author'>
                <p>{news.byline}</p>
                <p>{correctDate}</p>
            </div>
            <p className='article-topic'>Topic related to {`${news.des_facet.join(', ')}.`}</p>
            <p className='article-desc'>{news.abstract}</p>
            <a className='article-url' href={news.url}>Read the full article here</a>
            <Link className="article__link" to="/">
                <button className="article__button" onClick={() => activate()}>Back</button>
            </Link>
        </div>
    )
}

export default Article;