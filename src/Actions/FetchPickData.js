import axios from 'axios';
import {apiBaseURL} from "./../Utils/Constants";
import {
  FETCHING_PICK_DATA,
  FETCHING_PICK_DATA_FAIL,
  FETCHING_PICK_DATA_SUCCESS
} from "./../Utils/ActionTypes";

export default function FetchPickData() {
  return dispatch => {

    dispatch({type: FETCHING_PICK_DATA})

    return axios.get(`${apiBaseURL}`, {maxContentLength: 100})
      .then(res => {
        dispatch({type: FETCHING_PICK_DATA_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({type: FETCHING_PICK_DATA_FAIL, payload: err.data})
      });
  }
}