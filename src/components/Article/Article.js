import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';


const Article = ({news}) => {
    const date = news.published_date.substring(news.published_date.length - 15, news.published_date).split('-')
    const correctDate = date[1] + '/' + date[2] + '/' + date[0]
    

    return (
        <div className="article">
            <img src={news.multimedia[1].url} className='news_section-img'/>
            <h2>{news.title}</h2>
            <p>{news.byline}</p>
            <p>{correctDate}</p>
            <p>{news.abstract}</p>
            <a href={news.url}>Read the full article</a>
            <p>Topic related to {`${news.des_facet.join(', ')}.`}</p>
            <Link className="article__link" to="/">
                <button className="article__button">Back</button>
            </Link>
        </div>
    )
}

export default Article;