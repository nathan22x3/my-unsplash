import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import photoApi, { PhotosResponse } from 'apis/photo.api';
import { RootState } from 'app/store';
import { Photo } from 'interfaces/photo.interface';

type SliceState = 'idle' | 'pending' | 'finished';

interface PhotoSlice extends PhotosResponse {
  state: SliceState;
}

export const fetchWithLimit = createAsyncThunk<
  PhotosResponse,
  { limit?: number; next_cursor?: string }
>('photos/fetchWithLimit', async ({ limit, next_cursor }) => {
  return await photoApi.getWithLimit(limit, next_cursor);
});

const initialState: PhotoSlice = {
  state: 'idle',
  data: [],
  limit: 10,
  next_cursor: '',
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addNewPhoto: (state, action: PayloadAction<Photo>) => {
      state.data.unshift(action.payload);
    },
    deletePhotoById: (state, action: PayloadAction<string>) => {
      state.data.splice(
        state.data.findIndex((photo) => photo._id === action.payload),
        1
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWithLimit.pending, (state) => {
        state.state = 'pending';
      })
      .addCase(fetchWithLimit.fulfilled, (state, action) => {
        state.state = 'finished';
        state.data.push(...action.payload.data);
        state.limit = action.payload.limit;
        state.next_cursor = action.payload.next_cursor;
      });
  },
});

export const selectPhotos = (state: RootState) => state.photo.data;
export const selectLimit = (state: RootState) => state.photo.limit;
export const selectNextCursor = (state: RootState) => state.photo.next_cursor;

export const { addNewPhoto, deletePhotoById } = photoSlice.actions;

export default photoSlice;
