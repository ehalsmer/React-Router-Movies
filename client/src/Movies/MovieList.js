import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const [movies, setMovies] = useState([])
  console.log('beginning of MovieList props', props)
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails {...props} addToSavedList={props.addToSavedList} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({movie}, props) {
  console.log('movielist props', props)
  return (
    <div>
      <Link style={linkStyle} to={`movies/${movie.id}`}>
      <MovieCard {...props} movie={movie}/>
      </Link>
    </div>
  );
}

export default MovieList;


const linkStyle = {
  textDecoration: 'none',
  color: 'black'
}