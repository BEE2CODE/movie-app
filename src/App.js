import { useEffect, useState } from 'react'
import './App.css'
import MoviesCard from './MoviesCard'

function App() {
  const API_URL ='https://api.themoviedb.org/3/movie/top_rated?api_key=d91a8bff2f8fff82a0c47ec660d5bb9f'
  const API_SEARCH ='https://api.themoviedb.org/3/movie/343611?api_key=d91a8bff2f8fff82a0c47ec660d5bb9f'

  const [movies, setMovies] = useState([])
  const [term, setTerm]= useState("")

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }, [])

  console.log(movies)

  const handleSearch = (e) =>{
    e.preventDefault()

    fetch(API_SEARCH + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }

  return (
    <div className="App">
      <div className="search_nav">
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {movies.map((movies) => (
          <MoviesCard {...movies} />
        ))}
      </div>
    </div>
  )
}

export default App
