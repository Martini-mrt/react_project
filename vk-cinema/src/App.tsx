// import MainPage from "./pages/MainPage";

import Footer from "./components/Footer";
import HeaderLayout from "./layouts/HeaderLayout";
import SocialList from "./layouts/SocialList";
import Account from "./pages/Account";
import FilmPage from "./pages/FilmPage";
import GenrePage from "./pages/GenrePage";
import MainPage from "./pages/MainPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";





function App() {
  return (
    // !сделать Strict mode!
    <>
      <HeaderLayout />
{/*  */}
      {/* <MainPage /> */}

     {/* <GenrePage /> */}

     {/* <MoviesByGenrePage /> */}

      {/* <FilmPage /> */}

      <Account />

     <Footer>
        <SocialList />
      </Footer>
    </>

  );
}

export default App;
