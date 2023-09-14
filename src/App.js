import { useEffect, useState } from 'react'
import './App.css'
import MoviesCard from './MoviesCard'

function App() {
  const API_KEY = 'd91a8bff2f8fff82a0c47ec660d5bb9f'
  const API_DOMAIN = 'https://api.themoviedb.org/3/'

  const API_TOP_RATED = `${API_DOMAIN}movie/top_rated?api_key=${API_KEY}`

  const API_SEARCH = `${API_DOMAIN}search/movie?api_key=${API_KEY}`

  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(API_TOP_RATED)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }, [API_TOP_RATED])

  const handleSearch = (e) => {
    e.preventDefault()

    fetch(`${API_SEARCH}&query=${term}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }

  return (
    <div className="App">
      <div className="search_nav">
        <div className='logo'>
          <img src='/Logo.png' alt='Logo' />
        </div>
        <div className='search_box'>
          <form onSubmit={handleSearch} >
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {movies?.map((movies) => (
          <MoviesCard {...movies} />
        ))}
      </div>
    </div>
  )
}

export default App
