import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';


const Article = ({news}) => {

    // const location = useLocation()
    // const [ embedUrl, setEmbedUrl ] = useState('')

    // useEffect(() => {
    //     setEmbedUrl(location.state)
    // }, [location.state])

    return (
        <div className="article">
            <img src={news.multimedia[1].url} className='news_section-img'/>
            <h2>{news.title}</h2>
            <p>{news.published_date}</p>
            <p>{news.section}</p>
            <p>{news.abstract}</p>
            <a href={news.url}>Read the full article</a>
            <Link className="article__link" to="/">
                <button className="article__button">Back</button>
            </Link>
        </div>
    )
}

export default Article;