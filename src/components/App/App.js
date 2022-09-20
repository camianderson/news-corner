import './App.css';
import NewsList from '../NewsList/NewsList';
import Article from '../Article/Article';
import { getNews } from '../../APIcalls'

const App = () => {

  const getNewsData = () => {
    getNews()
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> News Feed {getNewsData()}</h1>

      </header>
      <NewsList />
      <Article />
    </div>
  );
}

export default App;
