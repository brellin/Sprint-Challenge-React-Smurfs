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
                key={smurf.id}
                updateSmurf={props.updateSmurf}
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
