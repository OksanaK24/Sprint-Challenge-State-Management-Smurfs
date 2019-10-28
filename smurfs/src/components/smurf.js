import React, {useState} from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions/smurf_act";

function Smurfs(props) {

  const[smurfName, setSmurfName] = useState("");
  const[smurfAge, setSmurfAge] = useState("");
  const[smurfHeight, setSmurfHeight] = useState("");

  const fetchSmurf = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  function handleSubmit(e){
    e.preventDefault();
    props.addSmurf({
      name: smurfName,
      age: smurfAge,
      height: smurfHeight,
      id: Date.now()
    });
    setSmurfName("");
    setSmurfAge("");
    setSmurfHeight("")
  }

  function handleNameChange(e){
    e.preventDefault();
    setSmurfName(e.target.value)
  }

  function handleAgeChange(e){
    e.preventDefault();
    setSmurfAge(e.target.value)
  }

  function handleHeightChange(e){
    e.preventDefault();
    setSmurfHeight(`${e.target.value}cm`)
  }

  return (
    <div>

      {props.isFetching && <p>Fetching your Smurfs</p>}
      <div className="AllCards" >
        {props.smurfs.map(smurf => (
          <div className="SmurfCard" >
            <h4 key={smurf.id}>{smurf.name}</h4>
            <p>Hello, my name is {smurf.name}. My age is {smurf.age} and height is {smurf.height}. </p>
          </div>
        ))}
      </div>
      {props.error && <p>{props.error}</p>}
      <button onClick={fetchSmurf}>See our smurfs</button>

      <form className="inputs" onSubmit = {handleSubmit}>
        <input 
          type="text"
          placeholder="Name"
          name="Name"
          value={smurfName}
          onChange={handleNameChange}
        />
        <input 
          type="number"
          placeholder="Age"
          name="Age"
          value={smurfAge}
          onChange={handleAgeChange}
        />
        <input 
          type="text"
          placeholder="Height"
          name="Height"
          value={smurfHeight}
          onChange={handleHeightChange}
        />
        <button type="submit">`Add new Smurf =)`</button>
      </form>

    </div>
  );
};

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = {
    getSmurfs,
    addSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
