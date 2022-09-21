import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import coinsSaga from './saga/apiSaga';
import rootReducer from "./reducers/rootReducer";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(coinsSaga);
//const action = type =>store.dispatch({type});   

export default store;