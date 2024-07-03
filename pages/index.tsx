import { wrapper } from "src/Redux/store";
import { END } from "@redux-saga/core";
import { useSelector } from "react-redux";
import HomePage from "src/Pages/Home";
import { HomePageActionTypes } from "src/Redux/ActionTypes/HomePageActionTypes";

interface Props { }

const Home = (props: Props) => {
  // const { loading, error, home_page_res } = useSelector((state: any) => state.homePageData.home_page);

  const homePage = () => {
    // if (loading) {
    //   return <div>Loading...</div>;
    // } else if (error) {
    //   return <div>{error}</div>;
    // } else if (home_page_res) {
    return <HomePage />;
    // }
  };

  return homePage();
};

// Home.getInitialProps = wrapper.getInitialPageProps((store) => async (ctx: any) => {
//   store.dispatch({
//     type: HomePageActionTypes.GET_HOME_PAGE_DATA_REQUEST,
//   });
//   if (ctx.req) {
//     store.dispatch(END);
//     await store.sagaTask.toPromise();
//   }
// });

export default Home;
