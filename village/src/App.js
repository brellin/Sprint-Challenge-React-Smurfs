import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    !mounted &&
      axios
        .get('http://localhost:3333/smurfs')
        .then(res => setSmurfs(res.data))
        .catch(err => console.log(err))
    setMounted(true);
  })

  const deleteSmurf = (e, id) => {
    e.persist();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
    setMounted(false);
  }

  return (
    <div className="App">
      <header>
        <NavLink
          to='/smurfs'
          activeStyle={{
            border: '1px ridge whitesmoke',
            background: 'skyblue',
            borderRadius: '5px'
          }}
        >Smurfs Home</NavLink>
        <NavLink
          to='/add-smurf'
          activeStyle={{
            border: '1px ridge whitesmoke',
            background: 'skyblue',
            borderRadius: '5px'
          }}
        >New Smurf</NavLink>
      </header>
      <Route exact path='/smurfs' render={props => (
        <Smurfs
          smurfs={smurfs}
          deleteSmurf={deleteSmurf}
          setSmurfs={setSmurfs}
          setMounted={setMounted}
        />
      )} />
      <Route path='/add-smurf' component={SmurfForm} />
    </div>
  );
}

export default App;
