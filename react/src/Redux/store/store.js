import { configureStore } from '@reduxjs/toolkit'
import modeReducer from "../slice/modeSlice"
import currencyReducer from "../slice/currencySlice"
import currencySignReducer  from "../slice/currencySignSlice"
import visibleReducer from "../slice/visibileSlice"
export const store = configureStore({
  reducer: {
     mode : modeReducer,
     currency : currencyReducer,
     currencySign : currencySignReducer,
     visible : visibleReducer,
  },
})