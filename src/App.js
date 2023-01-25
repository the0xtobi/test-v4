import './App.css';
import SearchBar from './components/SearchBar';

function App() {

  const handleSubmit = (term) => {
    searchImages(term) 
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
