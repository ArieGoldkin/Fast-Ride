import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./rootReducer";
import rootSaga from "./rootSaga";

import { composeWithDevTools } from "redux-devtools-extension";

const requestedUrl = "http://fast-rider.herokuapp.com/api";

axios.defaults.baseURL = requestedUrl;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
