import React from 'react'
import './MoviesCard.css'

const MoviesCard = (props) => {
    const API_IMG ="https://image.tmdb.org/t/p/w500/"
  return (
    <div className='Card'>
        <div className='Poster'>
            <img src={API_IMG + props.poster_path} />
        </div>

        <div className='info'>
            <p className='title'>{props.title}</p>
            <p className='title'>{props.release_date}</p>
            <p className='vote'>{props.vote_average}</p>
        </div>
    </div>
  )
}

export default MoviesCard