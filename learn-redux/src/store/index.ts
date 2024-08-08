import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todoStore/todoReducer";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  // Add your reducers here
  todoStore: todoReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  // blacklist: ["navigation"],
};

export type AppState = ReturnType<typeof rootReducer>;

const rReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(rReducer, applyMiddleware(thunk));

export const persistor = persistStore(store as any);
