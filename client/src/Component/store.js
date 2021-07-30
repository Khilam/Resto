// import { createStore ,applyMiddleware} from "redux";
// import {itemReducer} from "./Reducer/item";
// import thunk from "redux-thunk"
// import { combineReducers } from "redux";


// const Reducers = combineReducers({

//   itemstore: itemReducer


// });

// const store = createStore(Reducers,applyMiddleware(thunk));
// export default store;


import { createStore, applyMiddleware,compose } from "redux";
import { rootReducer } from "./Reducer/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store;