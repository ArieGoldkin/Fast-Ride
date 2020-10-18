import { takeLatest, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/FastRiderActions";
import * as api from "../../api/FastRiderAPI";

function* getFastRiderData(action) {
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

function* watchGetFastRiderDataRequest() {
  yield takeLatest(actions.Types.GET_FAST_RIDER_DATA_REQUEST, getFastRiderData);
}

function* submitRide(action) {
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

function* watchSubmitRideRequest() {
  yield takeLatest(actions.Types.SUBMIT_RIDE_REQUEST, submitRide);
}

const FastRiderSagas = [
  fork(watchGetFastRiderDataRequest),
  fork(watchSubmitRideRequest),
];

export default FastRiderSagas;
