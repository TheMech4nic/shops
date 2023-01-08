import addItem from "./addItem";
import { combineReducers } from "redux";

const reducer = combineReducers({
    addItem : addItem
})

export default reducer;