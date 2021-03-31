import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import peopleReducer from 'redux/peopleSlice';
import { watchFetchPeople } from 'redux/peopleSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchPeople);

export default store;
