import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h1>Smurf Village</h1>
        <div className="Smurfs">
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  deleteSmurf={this.props.deleteSmurf}
                  key={smurf.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
