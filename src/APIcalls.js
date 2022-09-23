const getNews = (topic) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${API_KEY}`)
    .then(response => response.json())
}

export {getNews}