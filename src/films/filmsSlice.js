import { createSlice } from '@reduxjs/toolkit';

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    films: null,
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
    setError: (state) => {
      state.isError = true;
      state.loading = false;
    },
  },
});

export const { fetchFilms, fetchFilmsSuccess, setError } = filmsSlice.actions;

const selectPeopleState = (state) => state.films;
export const selectFilms = (state) => selectPeopleState(state).films;

export default filmsSlice.reducer;
