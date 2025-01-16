import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Call from '../../types/call';

const initialState: Call[] = []

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    getCalls: (state, action: PayloadAction<Call[]>) => {
      //aq entra a requisição (?)
      console.log(action.payload);
      return action.payload
      
    }
  },
});

export const { getCalls } = themeSlice.actions;
export default themeSlice.reducer;
