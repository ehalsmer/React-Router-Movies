import React from 'react';
import {Link} from 'react-router-dom';
import {Item, Container, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const SavedList = props => {
  console.log('saved list props', props);

  const clearList = () => {
    const clearSavedList = props.clearSavedList;
    clearSavedList()
  }

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <Container className="saved-container">
      {props.list.map(movie => (
        <Item className="saved-movie">{movie.title}</Item>
      ))}
    </Container>
    <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
      <Link to="/" style={{textDecoration:'none'}}><Button color="blue">Home</Button></Link>
      <Button color="orange" onClick={props.clearSavedList}>Clear</Button>
    </div>
  </div>
)};

export default SavedList;
