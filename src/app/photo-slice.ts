import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import photoApi from 'apis/photo.api';
import { RootState } from 'app/store';
import { Photo } from 'interfaces/photo.interface';

type SliceState = 'idle' | 'pending' | 'finished';

interface PhotoSlice {
  state: SliceState;
  data: Array<Photo>;
}

export const fetchAllPhotos = createAsyncThunk('photos/fetchAll', async () => {
  return await photoApi.getAll();
});

const initialState: PhotoSlice = {
  state: 'idle',
  data: [],
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
      .addCase(fetchAllPhotos.pending, (state) => {
        state.state = 'pending';
      })
      .addCase(fetchAllPhotos.fulfilled, (state, action) => {
        state.state = 'finished';
        state.data = action.payload;
      });
  },
});

export const selectPhotos = (state: RootState) => state.photo.data;

export const { addNewPhoto, deletePhotoById } = photoSlice.actions;

export default photoSlice;
