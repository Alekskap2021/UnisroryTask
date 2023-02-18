import { configureStore } from "@reduxjs/toolkit";
import { tableApi } from "pages/MainPage/model/index";
import formSlice from "pages/MainPage/model/formSlice";
// config the store

const store = configureStore({
  reducer: {
    formSlice,
    [tableApi.reducerPath]: tableApi.reducer,
    //...
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tableApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
