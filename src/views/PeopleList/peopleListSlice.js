import { createSlice } from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
  name: 'peopleList',
  initialState: {
    people: [],
    next: null,
    loading: true,
    isError: false,
  },
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
      state.isError = false;
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.previous = people.previous;
      state.next = people.next;
      state.loading = false;
      state.isError = false;
    },
    fetchNextPeople: (state) => {
      state.loading = true;
      state.isError = false;
    },
    fetchNextPeopleSuccess: (state, { payload: people }) => {
      state.people = [...state.people, ...people.results];
      state.previous = people.previous;
      state.next = people.next;
      state.loading = false;
      state.isError = false;
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
  fetchNextPeople,
  fetchNextPeopleSuccess,
  setError,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.peopleList;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectNext = (state) => selectPeopleState(state).next;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectIsError = (state) => selectPeopleState(state).isError;

export default peopleSlice.reducer;
