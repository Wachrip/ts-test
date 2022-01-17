// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import technicsReducer from "./reducers/technicsReducer";
// import createRootReducer from "./reducers";

// const store = createStore(createRootReducer());

const store = configureStore({
  reducer: {
    technics: technicsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
