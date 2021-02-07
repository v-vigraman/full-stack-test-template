import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import apiMiddleware from "./middleware/api";


export default createStore(rootReducer, applyMiddleware(apiMiddleware));
