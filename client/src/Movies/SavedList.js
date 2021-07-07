import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Item, Container, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const SavedList = props => {
  // console.log('saved list props', props);

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <Container className="saved-container">
      {props.list.map(movie => (
        <div>
          <Link  to={`/movies/${movie.id}`}>
            <Button onClick={()=>props.removeTitle(movie.id)} compact circular size='mini'>x</Button>{movie.title}
          </Link >
          {/* <Link to={`/movies/${movie.id}`}>link</Link> */}

        </div>
        
        ))}
    </Container>
    <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
      <Link to="/" style={{textDecoration:'none'}}><Button color="blue">Home</Button></Link>
      <Button color="orange" onClick={props.clearSavedList}>Clear</Button>
    </div>
  </div>
)};

export default SavedList;
