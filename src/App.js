import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api'

function App() {

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
