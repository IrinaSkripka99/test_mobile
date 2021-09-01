import {createSlice} from '@reduxjs/toolkit';
import {loadEvents} from './actions';
import {eventsAdapter} from './adapter';

const slice = createSlice({
  name: 'entities',
  initialState: eventsAdapter.getInitialState({
    isLoading: false,
    isRefreshing: false,
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadEvents.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loadEvents.fulfilled, (state, {payload}) => {
      eventsAdapter.addMany(state, payload.data);
      state.isLoading = false;
    });
    builder.addCase(loadEvents.rejected, state => {
      state.isLoading = false;
    });
  },
});
const entitiesReducer = slice.reducer;
export type EntitiesStore = ReturnType<typeof entitiesReducer>;

export default entitiesReducer;
