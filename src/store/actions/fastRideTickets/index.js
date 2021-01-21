import * as actionTypes from "../actionTypes"

export const getFastRiderDataRequest = (token) => ({
    type: actionTypes.GET_FAST_RIDER_DATA_REQUEST,
    payload: {
      token,
    },
  });
  
  export const getFastRiderDataSuccess = (items) => ({
    type: actionTypes.GET_FAST_RIDER_DATA_SUCCESS,
    payload: {
      items,
    },
  });
  
  export const getFastRiderDataFailure = (error) => ({
    type: actionTypes.GET_FAST_RIDER_DATA_FAILURE,
    payload: error,
  });
  
  export const setSelectedRIdeRequest = (item) => ({
    type: actionTypes.SET_SELECTED_RIDE_REQUEST,
    payload: {
      item,
    },
  });
  
  export const setSelectedRIdeSuccess = (item) => ({
    type: actionTypes.SET_SELECTED_RIDE_SUCCESS,
    payload: {
      item,
    },
  });
  export const setSelectedRIdeFailure = (error) => ({
    type: actionTypes.SET_SELECTED_RIDE_FAILURE,
    payload: {
      error,
    },
  });
  
  export const submitRideRequest = ({ token, pinNumber, rideId }) => ({
    type: actionTypes.SUBMIT_RIDE_REQUEST,
    payload: {
      token,
      pinNumber,
      rideId,
    },
  });
  
  export const submitRideSuccess = (item) => ({
    type: actionTypes.SUBMIT_RIDE_SUCCESS,
    payload: {
      item,
    },
  });
  
  export const submitRideFailure = (error) => ({
    type: actionTypes.SUBMIT_RIDE_FAILURE,
    payload: {
      error,
    },
  });
  
  export const setErrorMessage = (error) => ({
    type: actionTypes.SET_ERROR_MESSAGE,
    payload: {
      error,
    },
  });
  
  export const changeSuccess = () => ({
    type: actionTypes.CHANGE_SUCCESS_ON_REDIRECT,
  });
  