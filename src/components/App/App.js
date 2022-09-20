import './App.css';
import NewsList from '../NewsList/NewsList';
import Article from '../Article/Article';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> News Feed </h1>
      </header>
      <NewsList />
      <Article />
    </div>
  );
}

export default App;
