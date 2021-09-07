import { combineReducers } from '@reduxjs/toolkit';
import photoSlice from 'app/photo-slice';

const rootReducer = combineReducers({
  photo: photoSlice.reducer,
});

export default rootReducer;
