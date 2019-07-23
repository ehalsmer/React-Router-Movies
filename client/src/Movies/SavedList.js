import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = props => {
  console.log('saved list props', props);

  const clearList = () => {
    const clearSavedList = props.clearSavedList;
    clearSavedList()
  }

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
      <Link to="/" style={{textDecoration:'none'}}className="home-button">Home</Link>
      <div onClick={props.clearSavedList} className="clear-button">Clear</div>
    </div>
  </div>
)};

export default SavedList;
