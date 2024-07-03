import { combineReducers } from "redux";
import HomePageReducer from "./Reducers/HomePageReducer";

const rootReducer: any = combineReducers({
  homePageData: HomePageReducer,
});

export default rootReducer;
