import React from 'react'
import './MoviesCard.css'

const MoviesCard = (props) => {
    const API_IMG ="https://image.tmdb.org/t/p/w500/"
  return (
    <div className='Card' >
        <div className='Poster'>
            <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpbmVtYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"} />
        </div>

        <div className='info'>
            <p data-testid="movie-title" className='title'><span className='strong_title'></span> {props.title}</p>
            <p data-testid="movie-release-date" className='release_date'><span className='strong_title'></span> {props.release_date}</p>
            <span className='container'>
            <p className='vote'>{props.vote_average}</p>
            <p className='IMDB'>IMDb</p>
            </span>
        </div>
        
        <div className='overview'>
          <h2 data-testid="movie-overview"  className='title_overview'>Overview:</h2>
          <h3 className='overview_info'>{props.overview}</h3>
        </div>
    </div>
  )
}

export default MoviesCard