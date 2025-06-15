// import MainPage from "./pages/MainPage";

import Footer from "./components/Footer";
import HeaderLayout from "./layouts/HeaderLayout";
import SocialList from "./layouts/SocialList";
import AccountPage from "./pages/AccountPage";
import FilmPage from "./pages/FilmPage";
import GenrePage from "./pages/GenrePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";





function App() {
  return (
  
    <>
      <HeaderLayout />
{/*  */}
      <MainPage />

     {/* <GenrePage /> */}

     {/* <MoviesByGenrePage /> */}

      {/* <FilmPage /> */}

      {/* <AccountPage /> */}

      <LoginPage />

     <Footer>
        <SocialList />
      </Footer>
    </>

  );
}

export default App;
