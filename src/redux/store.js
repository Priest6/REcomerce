import { createStore } from "redux";
import rootReducer from "./reducer";

//create store
const store = createStore(rootReducer);
export default store;
