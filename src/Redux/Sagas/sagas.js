import { call, put, takeLatest } from 'redux-saga/effects'
import { getLocation } from '../Services/index'

function* fetchLocation(action) {
    try {
        const locationData = yield call(getLocation, action.data);
        if (locationData.status === 200 && locationData.data && locationData.data.places && locationData.data.places.length > 0) {
            yield put({ type: "LOCATION_FETCH_FAILED", message: '' });
            yield put({ type: "LOCATION_FETCH_SUCCEEDED", response: locationData.data });
        } else {
            yield put({ type: "LOCATION_FETCH_FAILED", message: 'Something went wrong, Please try again' });
        }
    } catch (e) {
        yield put({ type: "LOCATION_FETCH_FAILED", message: 'Something went wrong, Please try again' });
    }
}

function* watchLocationSaga() {
    yield takeLatest("LOCATION_FETCH_REQUESTED", fetchLocation);
}

export default watchLocationSaga;
