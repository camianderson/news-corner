import './App.css';
import NewsList from '../NewsList/NewsList';
import Article from '../Article/Article';
import { getNews } from '../../APIcalls'
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

const App = () => {

  const [newsData, setNewsData] = useState([])

  const getNewsData = () => {
    getNews()
    .then(data => setNewsData(data.results))
  }

  useEffect(() => {
    getNewsData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1> News Feed </h1>
      </header>
      <Route exact path='/' render={() => <NewsList newsData={newsData}/>} />
      <Route exact path='/Article' render={() => <Article />}/>
    </div>
  );
}

export default App;
