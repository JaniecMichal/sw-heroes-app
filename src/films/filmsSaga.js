import { call, put, takeEvery } from 'redux-saga/effects';
import { getApiData } from 'assets/customFunctions/getApiData.js';
import { fetchFilms, fetchFilmsSuccess, setError } from './filmsSlice';

function* fetchFilmsHandler({ payload = 'films' }) {
  try {
    const films = yield call(getApiData, payload);
    yield put(fetchFilmsSuccess(films));
  } catch (error) {
    yield put(setError());
  }
}

export function* watchFetchFilms() {
  yield takeEvery(fetchFilms.type, fetchFilmsHandler);
}
