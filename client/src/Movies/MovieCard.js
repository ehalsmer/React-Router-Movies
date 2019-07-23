import React from 'react';
import {Button} from 'semantic-ui-react';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  console.log(props);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(props.movie)
  }

  return(
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <Button color="teal" onClick={saveMovie} className="save-button">Save</Button>
    </div>
  );
};

export default MovieCard;
