import './App.css';
import SearchBar from './components/SearchBar';

function App() {

  const handleSubmit = (term) => {
    console.log('do a search with', term)
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
