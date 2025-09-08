import { configureStore } from '@reduxjs/toolkit'
import modeReducer from "../slice/slice"
import currencyReducer from "../slice/slice2"
import currencySignReducer  from "../slice/slice3"
import visibleReducer from "../slice/slice4"
export const store = configureStore({
  reducer: {
     mode : modeReducer,
     currency : currencyReducer,
     currencySign : currencySignReducer,
     visible : visibleReducer,
  },
})