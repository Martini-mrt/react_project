// import MainPage from "./pages/MainPage";

import Footer from "./components/Footer";
import HeaderLayout from "./layouts/HeaderLayout";
import SocialList from "./layouts/SocialList";
import GenrePage from "./pages/GenrePage";
import MainPage from "./pages/MainPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";


// TODO 
// todo Переделть ListCard - grid по стилям проверить



function App() {
  return (
    // !сделать Strict mode!
    <>
      <HeaderLayout />
{/*  */}
      <MainPage />

     {/* <GenrePage /> */}

     {/* <MoviesByGenrePage /> */}

     <Footer>
        <SocialList />
      </Footer>
    </>

  );
}

export default App;
