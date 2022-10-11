import { legacy_createStore } from "redux";
import rootReducers from "./Reducer/rootindex";

const store=legacy_createStore(rootReducers);


export default store  