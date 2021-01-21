import {  call, put } from "redux-saga/effects";
import * as actions from "../../actions";
import * as api from "../../../api/FastRiderAPI";

export function* getFastRiderData(action) {
  try {
    const responseData = yield call(api.getFastRiderData, {
      token: action.payload.token,
    });
    console.log(responseData);
    yield put(actions.getFastRiderDataSuccess(responseData.data));
  } catch (e) {
    console.log(e.response.data);
    yield put(
      actions.getFastRiderDataFailure({
        error: e.response.data.message,
      })
    );
  }
}

export function* submitRide(action) {
  try {
    const responseData = yield call(api.submitRideData, {
      token: action.payload.token,
      pin: action.payload.pinNumber,
      ride_id: action.payload.rideId,
    });
    yield put(actions.submitRideSuccess(responseData.data));
    console.log(responseData);
    // debugger;
    yield localStorage.setItem("pinNumber", action.payload.pinNumber);
  } catch (e) {
    console.log(e.response);
    yield put(
      actions.submitRideFailure({
        error: e.response.data.message,
      })
    );
  }
}
