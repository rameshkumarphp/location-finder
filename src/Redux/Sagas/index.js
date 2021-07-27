import { all } from 'redux-saga/effects'
import watchLocationSaga from "./sagas";
export default function* rootSaga() {
    yield all([
        watchLocationSaga()
    ]);
 }