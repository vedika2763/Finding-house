import { all, call, put, takeEvery } from "redux-saga/effects";
import { HomePageActionTypes } from "src/Redux/ActionTypes/HomePageActionTypes";
import { HomePageApi } from "src/Utils/Services/HomePageApi";

interface HomeDataResponse {
  status_code: any;
  error_status: any;
}

interface Response {
  status_code: any;
  error_status: any;
}

export function* getHomePageData(action: any) {
  const response: HomeDataResponse = yield call(() => HomePageApi.getTodos());

  if (!response.error_status) {
    yield put({
      type: HomePageActionTypes.GET_HOME_PAGE_DATA_SUCCESS,
      payload: response,
    });
  } else {
    yield put({
      type: HomePageActionTypes.GET_HOME_PAGE_DATA_FAIL,
      payload: response.error_status,
    });
  }
}

export default function* homePageRootSaga() {
  yield all([takeEvery(HomePageActionTypes.GET_HOME_PAGE_DATA_REQUEST, getHomePageData)]);
}
