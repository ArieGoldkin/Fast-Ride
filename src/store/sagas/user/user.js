import {  put } from "redux-saga/effects";
import * as actions from "../../actions";

export function* setRide(action) {
  try {
    yield put(actions.setSelectedRIdeSuccess(action.payload.item));
  } catch (e) {
    yield put(
      actions.setSelectedRIdeFailure({
        error: e.response.data.message,
      })
    );
  }
}


