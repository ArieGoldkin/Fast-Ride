import { combineReducers } from "redux";

import fastRiderReducer from "./fastRider/fastRider";
import userReducer from "./user/user";
import fastRiderResultReducer from "./fastRider/fastRiderResult";

export default combineReducers({
  fastRiderData: fastRiderReducer,
  userSelectItem: userReducer,
  fastRideDataResult: fastRiderResultReducer,
});
