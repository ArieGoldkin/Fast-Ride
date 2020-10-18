import { takeLatest, put, fork } from "redux-saga/effects";
import * as actions from "../jungleComponents/actions/FastRiderActions";

function* setRide(action) {
  try {
    yield put(actions.setSelectedRIdeSuccess(action.payload.item));
  } catch (e) {
    console.log(e.response);
    yield put(
      actions.setSelectedRIdeFailure({
        error: e.response.data.message,
      })
    );
  }
}

function* watchSetUserRideRequest() {
  yield takeLatest(actions.Types.SET_SELECTED_RIDE_REQUEST, setRide);
}

const UserRideSagas = [fork(watchSetUserRideRequest)];

export default UserRideSagas;
