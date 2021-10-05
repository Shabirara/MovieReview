import { allReducers } from "./allReducers";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import createSaga from "redux-saga";
// import { AllSaga } from "./AllSaga";

const persistConfig = {
  key: "reactpro",
  storage: AsyncStorage,
  timeout: null,
};

// const SagaMiddleware = createSaga();

const reducerPersist = persistReducer(persistConfig, allReducers);

export const Store = createStore(
  reducerPersist,
  {},
  applyMiddleware(logger)

  // applyMiddleware(Logger, SagaMiddleware)
);

export const storePersist = persistStore(Store);

// SagaMiddleware.run(AllSaga);
