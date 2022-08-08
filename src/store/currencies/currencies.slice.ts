import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  selectedCurrencies: string[];
}

const initialState = { selectedCurrencies: [] } as CurrencyState;

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.selectedCurrencies.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      const index = state.selectedCurrencies.indexOf(action.payload);
      if (index > -1) {
        state.selectedCurrencies.splice(index, 1);
      }
    },
  },
});

export const currencyActions = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
