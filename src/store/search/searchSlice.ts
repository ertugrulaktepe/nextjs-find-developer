import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchService } from './services/search-service';

export const getSearch = createAsyncThunk('get/search', async () => {
  return await searchService.getApiCall();
});

export interface SearchState {
  data: any;
  loading: boolean;
  error: string;
}
const initialState: SearchState = {
  data: [],
  loading: false,
  error: '',
};
export const SearchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearch.fulfilled, (state: SearchState, action: any) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = 'error';
    });
  },
});

export default SearchSlice.reducer;
