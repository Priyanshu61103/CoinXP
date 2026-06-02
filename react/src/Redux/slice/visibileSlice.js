import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const visibleSlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
     setVisible:(state)=>{
         state.value == true?state.value=false:state.value=true;
     },
  },
})

// Action creators are generated for each case reducer function
export const { setVisible } = visibleSlice.actions

export default visibleSlice.reducer