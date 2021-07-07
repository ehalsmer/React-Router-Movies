import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
//   console.log(props);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(props.movie);
  };

  return (
    <div className="save-wrapper">
      <div className="movie-card simple">
        <h2>{title}</h2>
        <div className="buttons">
          <Link to={`movies/${props.movie.id}`}>
            <Button color="grey">More Details</Button>
          </Link>
          <Button onClick={saveMovie} color="teal">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
