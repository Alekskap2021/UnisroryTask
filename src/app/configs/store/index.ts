import { configureStore } from "@reduxjs/toolkit";
import { tableApi } from "pages/MainPage/model/index";
import { userApi } from "pages/DetailsPaage/model";
import formSlice from "pages/MainPage/model/formSlice";

// Конфиг стора с подключением query запросов RTK
const store = configureStore({
  reducer: {
    formSlice,
    [tableApi.reducerPath]: tableApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    //...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tableApi.middleware, userApi.middleware),
});

// Типизация для кастом хуков, чтобы useDispatch и useSelector получали информацию от стора
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
