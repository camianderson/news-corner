const getNews = (topic) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=Z4xsGo3Ks6YkKjPUoWXwo5HbFtPlIwfT`)
    .then(response => response.json())
}

export {getNews}