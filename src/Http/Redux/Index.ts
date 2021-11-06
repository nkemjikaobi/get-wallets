import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import PaymentReducer from "./Reducers/Payments/PaymentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

export interface IRootReducer {
  payment: any;
}

export const AllReducers: IRootReducer = {
  payment: PaymentReducer,
};

export const PersistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const appReducer: any = combineReducers(AllReducers);

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export const PersistReducer = persistReducer(PersistConfig, rootReducer);

// MiddlewareClient
const store: Store = createStore(PersistReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof PersistReducer>;

export default store;
