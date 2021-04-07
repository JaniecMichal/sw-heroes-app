import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getApiData } from 'assets/customFunctions/getApiData.js';
import {
  fetchFilms,
  fetchFilmsSuccess,
  fetchPeople,
  fetchPeopleSuccess,
  fetchPersonDetails,
  fetchPersonSuccess,
  setError,
} from './peopleSlice';
import store from 'store';

function* fetchFilmsHandler({ payload = 'films' }) {
  try {
    const films = yield call(getApiData, payload);
    yield put(fetchFilmsSuccess(films));
  } catch (error) {
    yield put(setError());
  }
}

function* fetchPeopleHandler({ payload }) {
  try {
    const people = yield call(getApiData, payload);
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
  yield takeEvery(fetchFilms.type, fetchFilmsHandler);
  yield takeEvery(fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
