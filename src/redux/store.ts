import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storageSessionModule from "redux-persist/lib/storage/session";

import sidebarReducer from "./slices/sidebar-slice";
import userReducer from "./slices/user-slice";

const rootReducer = combineReducers({
  user: userReducer,
  sidebar: sidebarReducer,
});

const storageSession =
  (storageSessionModule as any).default ?? storageSessionModule;

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user", "sidebar"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
console.log(storageSession);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
