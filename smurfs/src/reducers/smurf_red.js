import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    ADD_NEW_SMURF
  } from "../actions/smurf_act";
  
  const initialState = {
    smurfs: [],
    error: "",
    isFetching: false 
  };
  
  function reducer(state = initialState, action) {
    
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ""
        };
      case FETCH_SMURFS_ERROR:
        return {
          ...state,
          error: action.payload
        };
      case ADD_NEW_SMURF:
        return {
          ...state,
          smurfs: [
            ...state.smurfs,
            action.payload
          ]
        }
      default:
        return state;
    }
  }
  
  export default reducer;
  