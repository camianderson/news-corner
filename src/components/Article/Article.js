import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';


const Article = ({news, activate}) => {
    const date = news.published_date.substring(news.published_date.length - 15, news.published_date).split('-')
    const correctDate = date[1] + '/' + date[2] + '/' + date[0]
    

    return (
        <div className="article">
            <img src={news.multimedia[1].url} className='news_section-img'/>
            <h2>{news.title}</h2>
            <p className='desc-by'>{news.byline}</p>
            <p className='desc-by'>{correctDate}</p>
            <p className='desc'>{news.abstract}</p>
            <a href={news.url}>Read the full article</a>
            <p className='desc'>Topic related to {`${news.des_facet.join(', ')}.`}</p>
            <Link className="article__link" to="/">
                <button className="article__button" onClick={() => activate()}>Back</button>
            </Link>
        </div>
    )
}

export default Article;