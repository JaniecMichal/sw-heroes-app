import { createSlice } from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    films: null,
    people: null,
    count: null,
    personUrl: null,
    personDetails: null,
    loading: true,
    isError: false,
  },
  reducers: {
    fetchFilms: (state) => {
      state.films = [];
      state.loading = true;
      state.isError = false;
    },
    fetchFilmsSuccess: (state, { payload: films }) => {
      state.films = films.results;
      state.loading = false;
      state.isError = false;
    },
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
    fetchPersonDetails: (state, { payload: url }) => {
      state.personUrl = url;
      state.loading = true;
    },
    fetchPersonSuccess: (state, { payload: details }) => {
      state.loading = false;
      state.personDetails = details;
    },
    setError: (state) => {
      state.isError = true;
      state.loading = false;
    },
  },
});

export const {
  fetchFilms,
  fetchFilmsSuccess,
  fetchPeople,
  fetchPeopleSuccess,
  fetchPersonDetails,
  fetchPersonSuccess,
  setError,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectFilms = (state) => selectPeopleState(state).films;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectIsError = (state) => selectPeopleState(state).isError;
export const selectPersonUrl = (state) => selectPeopleState(state).personUrl;
export const selectPersonDetails = (state) =>
  selectPeopleState(state).personDetails;

export default peopleSlice.reducer;
