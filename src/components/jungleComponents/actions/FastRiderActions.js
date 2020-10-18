export const Types = {
  GET_FAST_RIDER_DATA_REQUEST: "GET_FAST_RIDER_DATA_REQUEST",
  GET_FAST_RIDER_DATA_SUCCESS: "GET_FAST_RIDER_DATA_SUCCESS",
  GET_FAST_RIDER_DATA_FAILURE: "GET_FAST_RIDER_DATA_FAILURE",

  SET_SELECTED_RIDE_REQUEST: "SET_SELECTED_RIDE_REQUEST",
  SET_SELECTED_RIDE_SUCCESS: "SET_SELECTED_RIDE_SUCCESS",
  SET_SELECTED_RIDE_FAILURE: "SET_SELECTED_RIDE_FAILURE",

  SUBMIT_RIDE_REQUEST: "SUBMIT_RIDE_REQUEST",
  SUBMIT_RIDE_SUCCESS: "SUBMIT_RIDE_SUCCESS",
  SUBMIT_RIDE_FAILURE: "SUBMIT_RIDE_FAILURE",

  SET_ERROR_MESSAGE: "SET_ERROR_MESSAGE",
  CHANGE_SUCCESS_ON_REDIRECT: "CHANGE_SUCCESS_ON_REDIRECT",
};

export const getFastRiderDataRequest = (token) => ({
  type: Types.GET_FAST_RIDER_DATA_REQUEST,
  payload: {
    token,
  },
});

export const getFastRiderDataSuccess = (items) => ({
  type: Types.GET_FAST_RIDER_DATA_SUCCESS,
  payload: {
    items,
  },
});

export const getFastRiderDataFailure = (error) => ({
  type: Types.GET_FAST_RIDER_DATA_FAILURE,
  payload: error,
});

export const setSelectedRIdeRequest = (item) => ({
  type: Types.SET_SELECTED_RIDE_REQUEST,
  payload: {
    item,
  },
});

export const setSelectedRIdeSuccess = (item) => ({
  type: Types.SET_SELECTED_RIDE_SUCCESS,
  payload: {
    item,
  },
});
export const setSelectedRIdeFailure = (error) => ({
  type: Types.SET_SELECTED_RIDE_FAILURE,
  payload: {
    error,
  },
});

export const submitRideRequest = ({ token, pinNumber, rideId }) => ({
  type: Types.SUBMIT_RIDE_REQUEST,
  payload: {
    token,
    pinNumber,
    rideId,
  },
});

export const submitRideSuccess = (item) => ({
  type: Types.SUBMIT_RIDE_SUCCESS,
  payload: {
    item,
  },
});

export const submitRideFailure = (error) => ({
  type: Types.SUBMIT_RIDE_FAILURE,
  payload: {
    error,
  },
});

export const setErrorMessage = (error) => ({
  type: Types.SET_ERROR_MESSAGE,
  payload: {
    error,
  },
});

export const changeSuccess = () => ({
  type: Types.CHANGE_SUCCESS_ON_REDIRECT,
});
