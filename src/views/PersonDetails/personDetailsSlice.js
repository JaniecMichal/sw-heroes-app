import { createSlice } from '@reduxjs/toolkit';

export const personSlice = createSlice({
  name: 'personDetails',
  initialState: {
    personUrl: null,
    personDetails: [],
    loading: true,
    isError: false,
  },
  reducers: {
    fetchPersonDetails: (state, { payload: url }) => {
      state.personUrl = url;
      state.loading = true;
    },
    fetchPersonSuccess: (state, { payload: details }) => {
      state.personDetails = details;
      state.loading = false;
    },
    setError: (state) => {
      state.isError = true;
      state.loading = false;
    },
  },
});

export const {
  fetchPersonDetails,
  fetchPersonSuccess,
  setError,
} = personSlice.actions;

const selectPersonState = (state) => state.personDetails;
export const selectPersonUrl = (state) => selectPersonState(state).personUrl;
export const selectPersonDetails = (state) =>
  selectPersonState(state).personDetails;
export const selectLoading = (state) => selectPersonState(state).loading;
export const selectIsError = (state) => selectPersonState(state).isError;

export default personSlice.reducer;
