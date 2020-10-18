import { combineReducers } from "redux";

import fastRiderReducer from "../jungleComponents/reducers/fastRiderReducer";
import userReducer from "../userComponents/userReducer";
import fastRiderResultReducer from "../jungleComponents/reducers/fastRiderResultReducer";

export default combineReducers({
  fastRiderData: fastRiderReducer,
  userSelectItem: userReducer,
  fastRideDataResult: fastRiderResultReducer,
});
