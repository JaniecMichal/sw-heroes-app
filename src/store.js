import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import peopleListReducer from 'views/PeopleList/peopleListSlice';
import personDetailsReducer from 'views/PersonDetails/personDetailsSlice';
import filmsReducer from 'films/filmsSlice';
import rootSaga from 'rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    peopleList: peopleListReducer,
    personDetails: personDetailsReducer,
    films: filmsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
