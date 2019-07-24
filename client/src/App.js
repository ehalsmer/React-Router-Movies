import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  const clearSavedList = ()=>{
    setSavedList([]);
  }
  const removeTitle = id =>{
    // filters out the current id you're removing from the savedList
    setSavedList([...savedList].filter(element => element.id !== id));
  }

  return (
    <div>
      <SavedList list={savedList} clearSavedList={clearSavedList} removeTitle={removeTitle}/>
      {/* <div>Replace this Div with your Routes</div> */}

        <Route exact path='/' render={(props)=>{return (<MovieList {...props} addToSavedList={addToSavedList} /> )}}/>
        <Route path='/movies/:id' render={(props)=>{return (<Movie {...props} addToSavedList={addToSavedList} /> )}}/>

    </div>
  );
};

export default App;
