import { configureStore } from "@reduxjs/toolkit";
import { fetchUsersApi } from "shared/api";
import registrationSlice from "shared/model/registrationSlise";

// Конфиг стора с подключением query запросов RTK
const store = configureStore({
  reducer: {
    registrationSlice,
    [fetchUsersApi.reducerPath]: fetchUsersApi.reducer,
    //...
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchUsersApi.middleware),
});

// Типизация для кастом хуков, чтобы useDispatch и useSelector получали информацию от стора
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
