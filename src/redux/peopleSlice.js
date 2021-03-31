import { createSlice } from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    people: null,
    count: null,
    categories: null,
    peopleId: null,
    person: null,
    loading: true,
    isError: false,
  },
  reducers: {
    fetchPeople: (state) => {
      state.people = [];
      state.loading = true;
      state.isError = false;
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.count = people.count;
      state.loading = false;
      state.isError = false;
    },
    fetchCategories: (state, { payload: categories }) => {
      state.categories = categories.categories;
    },
    fetchPersonDetails: (state, { payload: peopleId }) => {
      state.peopleId = peopleId;
      state.loading = true;
    },
    fetchPersonSuccess: (state, { payload: details }) => {
      state.loading = false;
      state.person = details;
    },
    setError: (state) => {
      state.isError = true;
      state.loading = false;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchCategories,
  fetchPersonDetails,
  fetchPersonSuccess,
  setError,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectMovies = (state) => selectPeopleState(state).people.results;
export const selectResults = (state) => selectPeopleState(state).results;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectIsError = (state) => selectPeopleState(state).isError;
export const selectCategories = (state) => selectPeopleState(state).categories;
export const selectPerson = (state) => selectPeopleState(state).person;
export const selectPersonId = (state) => selectPeopleState(state).person;

export default peopleSlice.reducer;
