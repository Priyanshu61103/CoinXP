import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "₹",
}

export const currencySignSlice = createSlice({
  name: 'currencySign',
  initialState,
  reducers: {
     setCurrencySign:(state,id)=>{
        console.log(id);
         if(id.payload == "inr")
         state.value="₹";  
         if(id.payload == "eur")
         state.value="€";   
         if(id.payload == "usd")
         state.value="$";   
     },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrencySign } = currencySignSlice.actions

export default currencySignSlice.reducer