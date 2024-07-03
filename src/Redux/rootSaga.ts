import { all } from "redux-saga/effects";
import homePageRootSaga from "./Sagas/HomePageSaga";

export default function* rootSaga() {
  yield all([homePageRootSaga()]);
}
