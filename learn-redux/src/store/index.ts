import { configureStore } from "@reduxjs/toolkit";
import todoSlide from "./todoStore/todoReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const todoPersist = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    todo: persistReducer(todoPersist, todoSlide),
  },
  // Added this mdware to fix error "A none-serializable value was detected..."
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
