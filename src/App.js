import { useState } from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList'
import searchImages from './api'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
