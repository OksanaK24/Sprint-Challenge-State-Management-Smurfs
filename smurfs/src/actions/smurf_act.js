import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => 
      // console.log(res.data),
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
      )
    .catch(err => dispatch({ type: FETCH_SMURFS_ERROR, payload: err }));
};

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADD_NEW_SMURF, payload: newSmurf})
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
