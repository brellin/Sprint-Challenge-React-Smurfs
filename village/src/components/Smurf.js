import React, { useState } from 'react';
import axios from 'axios';

const Smurf = props => {
  const [updating, setUpdating] = useState(false);
  const [upSmurf, setUpSmurf] = useState({ name: '', height: '', age: '' })

  const handleChanges = e => {
    setUpSmurf({
      ...upSmurf,
      [e.target.name]: e.target.value
    })
    console.log(upSmurf)
  }

  const updateSmurf = (e, id) => {
    e.persist();
    axios
      .put(`http://localhost:3333/smurfs/${id}`, upSmurf)
      .then(res => props.setSmurfs(res.data))
      .catch(err => console.log(err))
    props.setMounted(false);
  }

  return (
    <div className="Smurf">
      <button
        onClick={(e) => {
          e.preventDefault();
          setUpdating(true);
        }}
        style={{ display: updating === true ? 'none' : 'block' }}
      >Update</button>
      <form
        onSubmit={(e) => updateSmurf(e, props.id)}
      >
        {updating === false ?

          <h3>{props.name}</h3> :

          <input
            name='name'
            type='text'
            placeholder='Name'
            onChange={handleChanges}
            value={upSmurf.name}
          />}
        {updating === false ?

          <strong>{props.height} tall</strong> :

          <input
            name='height'
            type='text'
            placeholder='Height'
            onChange={handleChanges}
            value={upSmurf.height}
          />}
        {updating === false ?

          <p>{props.age} smurf years old</p> :

          <input
            name='age'
            type='number'
            placeholder='Age'
            onChange={handleChanges}
            value={upSmurf.age}
          />}
        <button onClick={(e) => {
          updating === false ?
            props.deleteSmurf(e, props.id) :
            e.persist();
        }}>{updating === false ? 'Remove' : 'Update'}</button>
      </form>

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

