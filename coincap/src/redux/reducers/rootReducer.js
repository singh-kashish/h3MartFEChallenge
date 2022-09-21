import {combineReducers} from "redux";
import {coinsData} from "./coinReducer";
import { pageData } from "./pageReducer";
export default combineReducers({
    coinsData,pageData
}) 