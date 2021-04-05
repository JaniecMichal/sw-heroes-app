import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getApiData } from 'assets/customFunctions/getApiData.js';
import {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPersonDetails,
  fetchPersonSuccess,
  setError,
} from './peopleSlice';
import store from 'store';

function* fetchPeopleHandler() {
  try {
    const people = yield call(getApiData);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(setError());
  }
}

function* fetchPersonDetailsHandler() {
  try {
    const personUrl = store.getState().people.personUrl;
    const details = yield call(getApiData, personUrl);
    yield put(fetchPersonSuccess(details));
  } catch (error) {
    yield put(setError());
  }
}

export function* watchFetchPeople() {
  yield takeEvery(fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
