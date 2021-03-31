import { call, put, delay, takeEvery } from 'redux-saga/effects';
import { getPeople } from 'assets/customFunctions/getDataApi.js';
import {
  fetchPeople,
  fetchPeopleSuccess,
  fetchCategories,
  fetchPersonDetails,
  fetchPersonSuccess,
  setError,
  selectPeopleState,
} from './peopleSlice';

function* fetchPeopleHandler({ payload = 1 }) {
  try {
    const people = yield call(getPeople, payload);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(setError());
  }
}

export function* watchFetchPeople() {
  yield takeEvery(fetchPeople.type, fetchPeopleHandler);
}
