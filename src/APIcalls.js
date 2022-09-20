const getNews = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Z4xsGo3Ks6YkKjPUoWXwo5HbFtPlIwfT')
    .then(response => response.json())
}

export {getNews}