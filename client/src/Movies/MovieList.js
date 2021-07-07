import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';
import SimpleCard from './SimpleCard';

const MovieList = (props) => {
  const [movies, setMovies] = useState([])
  // console.log('beginning of MovieList props', props)
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
  // console.log('middle of MovieList props', props)

  return (
    <div className="movie-list">
      {movies.map((movie) => {
        // console.log('props inside map', props)
        // <MovieDetails {...props} addToSavedList={props.addToSavedList} key={movie.id} movie={movie} />
        return(
          <div>
            <SimpleCard {...props} addToSavedList={props.addToSavedList} movie={movie}>

            {/* <Link style={linkStyle} to={`movies/${movie.id}`}>Read More
            </Link> */}
            </SimpleCard>
          </div>
        )
    })}
    </div>
  );
}

function MovieDetails({movie}, props) {
  console.log('movielist props', props)
  return (
    <div>

    </div>
  );
}

export default MovieList;


const linkStyle = {
  textDecoration: 'none',
  color: 'black'
}