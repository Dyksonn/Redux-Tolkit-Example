// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import AsyncStorage from "@react-native-community/async-storage";

// import { authUserReducer } from "./slices/authUser";
// import { notificationReducer } from "./slices/notifications";
// import { customTabReducer } from "./slices/customTab";

// const reducers = combineReducers({
//   authUser: authUserReducer,
//   notifications: notificationReducer,
//   customTab: customTabReducer
// });

// const persistConfig = {
//   key: "smartload",
//   storage: AsyncStorage,
//   whitelist: ["authUser"],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// let persistor = persistStore(store);

// export { store, persistor };
