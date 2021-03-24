import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./store/module/index";
import rootSaga from "./store/saga/index";

const sagaMiddleware = createSagaMiddleware();
const middleware = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
