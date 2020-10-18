import { all } from "redux-saga/effects";
import FastRiderSagas from "../jungleComponents/sagas/FastRiderSaga";
import UserRideSagas from "../userComponents/userSaga";
const combineSagas = [...FastRiderSagas, ...UserRideSagas];

export default function* rootSaga() {
  yield all({ ...combineSagas });
}
