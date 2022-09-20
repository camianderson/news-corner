import './App.css';
import NewsList from '../NewsList/NewsList';
import Article from '../Article/Article';
import { getNews } from '../../APIcalls'
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  const [newsData, setNewsData] = useState([])

  const handleChange = event => {
    getNewsData(event.target.value)
  }

  const getNewsData = (value) => {
    getNews(value)
    .then(data => setNewsData(data.results))
  }

  useEffect((value) => {
      getNewsData('us');
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1> News Feed </h1>
        <div className="home">
            <select onChange={handleChange}>
                <option value="us">U.S.</option>
                <option value="world">World</option>
                <option value="arts">Arts</option>
                <option value="automobiles">Automobiles</option>
                <option value="business">Business</option>
                <option value="fashion">Fashion</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
            </select>
        </div>
      </header>
      <Switch>
        <Route exact path='/' render={() => <NewsList newsData={newsData}/>} />
        <Route path='/article/:title' render={({ match }) => {
          console.log(match)
              const selectedNews = newsData.find(
                (news) => news.title === match.params.title
              );
              return (
                <Article
                  news={selectedNews}
                />
              );
            }} />
      </Switch>
    </div>
  );
}

export default App;
