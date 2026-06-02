import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "light",
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
     setMode:(state)=>{
         state.value=="light"?state.value="dark":state.value="light";
     },
  },
})

// Action creators are generated for each case reducer function
export const { setMode } = modeSlice.actions

export default modeSlice.reducer