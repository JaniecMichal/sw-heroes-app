import { call, put, takeEvery } from 'redux-saga/effects';
import { getApiData } from 'assets/customFunctions/getApiData.js';
import {
  fetchNextPeople,
  fetchNextPeopleSuccess,
  fetchPeople,
  fetchPeopleSuccess,
  setError,
} from './peopleListSlice';

function* fetchPeopleHandler({ payload }) {
  try {
    const people = yield call(getApiData, payload);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(setError());
  }
}

function* fetchNextPeopleHandler({ payload }) {
  try {
    const people = yield call(getApiData, payload);
    yield put(fetchNextPeopleSuccess(people));
  } catch (error) {
    yield put(setError());
  }
}

export function* watchFetchPeopleList() {
  yield takeEvery(fetchPeople.type, fetchPeopleHandler);
  yield takeEvery(fetchNextPeople.type, fetchNextPeopleHandler);
}
