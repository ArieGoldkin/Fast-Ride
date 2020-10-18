import { Types } from "../actions/FastRiderActions";
import { updateObject } from "../../store/utility";

const initialState = {
  items: [],
  loading: true,
  error: null,
};

const getFastRiderDataRequest = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const getFastRiderDataSuccess = (state, action) => {
  return updateObject(state, {
    items: action.payload.items,
    loading: false,
    error: null,
  });
};

const getFastRiderDataFailure = (state, action) => {
  return updateObject(state, {
    error: action.payload.error,
    loading: false,
  });
};

export default function fastRider(state = initialState, action) {
  switch (action.type) {
    case Types.GET_FAST_RIDER_DATA_REQUEST:
      return getFastRiderDataRequest(state, action);
    case Types.GET_FAST_RIDER_DATA_SUCCESS:
      return getFastRiderDataSuccess(state, action);
    case Types.GET_FAST_RIDER_DATA_FAILURE:
      return getFastRiderDataFailure(state, action);
    default:
      return state;
  }
}
