import { createSlice } from '@reduxjs/toolkit';

export interface headerState {
  user: {
    name: String,
    surname: String,
    image: String
  },
  toggleSettings: boolean
}

const initialState: headerState = {
  user: {
    name: "Adam",
    surname: "Lowenthal",
    image: "./images/user.jpg"
  },
  toggleSettings: false
}

export const headerSlice = createSlice({
  name: 'header',
  initialState: initialState,
  reducers: {
    toggleSettings: (state) => {
      state.toggleSettings = !state.toggleSettings;
    }
  }
})

export const { toggleSettings } = headerSlice.actions;

export default headerSlice.reducer;

