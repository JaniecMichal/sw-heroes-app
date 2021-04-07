import { call, put, takeLatest } from 'redux-saga/effects';
import { getApiData } from 'assets/customFunctions/getApiData.js';
import {
  fetchPersonDetails,
  fetchPersonSuccess,
  setError,
} from './personDetailsSlice';
import store from 'store';

function* fetchPersonDetailsHandler() {
  try {
    const personUrl = store.getState().personDetails.personUrl;
    const details = yield call(getApiData, personUrl);
    yield put(fetchPersonSuccess(details));
  } catch (error) {
    yield put(setError());
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
