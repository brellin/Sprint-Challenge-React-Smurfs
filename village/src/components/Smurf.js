import React, { useState } from 'react';

const Smurf = props => {
  const [updating, setUpdating] = useState(false);

  return (
    <div className="Smurf">
      <button
        onClick={(e) => {
          e.preventDefault();
          setUpdating(true);
        }}
        style={{ display: updating === true ? 'none' : 'block' }}
      >Update</button>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

      <button onClick={(e) => {
        props.deleteSmurf(e, props.id)
      }}>{updating === false ? 'Remove' : 'Update'}</button>

      <button
        onClick={(e) => {
          e.preventDefault();
          setUpdating(false);
        }}
        style={{ display: updating === false ? 'none' : 'block' }}
      >Cancel</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

