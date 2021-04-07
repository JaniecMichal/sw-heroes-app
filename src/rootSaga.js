import { all } from 'redux-saga/effects';
import { watchFetchPeopleList } from 'views/PeopleList/peopleListSaga';
import { watchFetchPersonDetails } from 'views/PersonDetails/personDetailsSaga';
import { watchFetchFilms } from 'films/filmsSaga';

export default function* rootSaga() {
  yield all([
    watchFetchPeopleList(),
    watchFetchPersonDetails(),
    watchFetchFilms(),
  ]);
}
