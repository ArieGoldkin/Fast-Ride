import { takeLatest, all, fork } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import { getFastRiderData, submitRide } from "./fastRider/FastRider";
import { setRide } from "./user/user";

function* watchFastRider() {
  yield all([
    takeLatest(actionTypes.GET_FAST_RIDER_DATA_REQUEST, getFastRiderData),
    takeLatest(actionTypes.SUBMIT_RIDE_REQUEST, submitRide),
  ]);
}

function* watchUser() {
  yield takeLatest(actionTypes.SET_SELECTED_RIDE_REQUEST, setRide);
}

export default function* rootSaga() {
  yield all([fork(watchFastRider), fork(watchUser)]);
}
