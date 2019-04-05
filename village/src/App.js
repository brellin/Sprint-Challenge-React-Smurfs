import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div className="App">
        <header>
          <Link to='/'>Smurfs Home</Link>
          <Link to='/add-smurf'>New Smurf</Link>
        </header>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}>
          <Route exact path='/' render={props => (
            <Smurfs smurfs={this.state.smurfs} />
          )} />
          <Route path='/add-smurf' component={SmurfForm} />
        </AnimatedSwitch>
      </div>
    );
  }
}

export default App;
