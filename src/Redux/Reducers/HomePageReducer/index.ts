import { HYDRATE } from "next-redux-wrapper";
import { HomePageActionTypes } from "src/Redux/ActionTypes/HomePageActionTypes";

interface HomePageReducerState {
  home_page: any;
}

const initialState: HomePageReducerState = {
  home_page: {
    loading: false,
    error: null,
    home_page_res: {},
  },
};

const homePageReducer = (state = initialState, action: any): HomePageReducerState => {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload.homePageData };
    }
    case HomePageActionTypes.GET_HOME_PAGE_DATA_REQUEST:
      return {
        ...state,
        home_page: { ...state.home_page, loading: true },
      };

    case HomePageActionTypes.GET_HOME_PAGE_DATA_SUCCESS:
      return {
        ...state,
        home_page: {
          ...state.home_page,
          loading: false,
          error: null,
          home_page_res: action.payload,
        },
      };

    case HomePageActionTypes.GET_HOME_PAGE_DATA_FAIL:
      return {
        ...state,
        home_page: {
          ...state.home_page,
          loading: false,
          home_page_res: {},
          error: action.payload,
        },
      };

    default: {
      return state;
    }
  }
};

export default homePageReducer;
