import * as actionTypes from "../../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  item: [],
  userToken: "433898df4a3e992b8411004109e4d574a90695e39e",
  loading: true,
  error: null,
};

const setSelectedItemRequest = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const setSelectedItemSuccess = (state, action) => {
  return updateObject(state, {
    item: action.payload.item,
    loading: false,
    error: null,
  });
};

const setSelectedItemFailure = (state, action) => {
  return updateObject(state, {
    error: action.payload.error,
    loading: false,
  });
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_RIDE_REQUEST:
      return setSelectedItemRequest(state, action);
    case actionTypes.SET_SELECTED_RIDE_SUCCESS:
      return setSelectedItemSuccess(state, action);
    case actionTypes.SET_SELECTED_RIDE_FAILURE:
      return setSelectedItemFailure(state, action);
    default:
      return state;
  }
}
