import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div>
      <h1>Smurf Village</h1>
      <div className="Smurfs">
        <ul>
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                deleteSmurf={props.deleteSmurf}
                setSmurfs={props.setSmurfs}
                setMounted={props.setMounted}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
