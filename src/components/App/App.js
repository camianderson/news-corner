import './App.css';
import NewsList from '../NewsList/NewsList';
import Article from '../Article/Article';
import { getNews } from '../../APIcalls'
import { useEffect, useState } from 'react';
import { Route, Switch, Link} from 'react-router-dom';

const App = () => {

  const [newsData, setNewsData] = useState([])
  const [topicSelected, setTopicSelected] = useState(false)

  const handleChange = event => {
    getNewsData(event.target.value)
    console.log(newsData)
  }

  const getNewsData = (value) => {
    getNews(value)
    .then(data => setNewsData(data.results))
  }

  const activateTopicSearch = () => {
    if(topicSelected === false){
      setTopicSelected(true)
    } else {
      setTopicSelected(false)
    }
  }

  useEffect(() => {
      getNewsData('us');
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1 className='title'> News Corner </h1>
        </Link>
        {!topicSelected && 
        <div className="home">
          <label>Select a topic &nbsp;
            <select name='topics' onChange={handleChange}>
                <option value="us">U.S.</option>
                <option value="world">World</option>
                <option value="arts">Arts</option>
                <option value="business">Business</option>
                <option value="fashion">Fashion</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
            </select>
          </label>
        </div>}
      </header>
      <Switch>
        <Route exact path='/' render={() => <NewsList newsData={newsData} activate={activateTopicSearch}/>} />
        <Route path='/article/:title' render={({ match }) => {
              const selectedNews = newsData.find(
                (news) => news.title === match.params.title
              );
              return (
                <Article
                  news={selectedNews}
                  activate={activateTopicSearch}
                />
              );
            }} />
      </Switch>
    </div>
  );
}

export default App;
