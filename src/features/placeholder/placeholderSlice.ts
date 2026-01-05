import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlaceholderState {
  message: string;
}

const initialState: PlaceholderState = {
  message: 'Redux is configured and ready!',
};

export const placeholderSlice = createSlice({
  name: 'placeholder',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = placeholderSlice.actions;

export default placeholderSlice.reducer;
