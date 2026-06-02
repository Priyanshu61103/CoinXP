import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "inr",
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
     setCurrency:(state,id)=>{
         state.value=id;
     },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrency } = currencySlice.actions

export default currencySlice.reducer