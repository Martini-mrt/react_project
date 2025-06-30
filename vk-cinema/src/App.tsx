// import MainPage from "./pages/MainPage";

import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import HeaderLayout from "./layouts/HeaderLayout";
import SocialList from "./layouts/SocialList";
import AccountPage from "./pages/AccountPage";
import MoviePage from "./pages/MoviePage";
import GenrePage from "./pages/GenrePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";
import AppLayout from "./layouts/AppLayout";


// link
// <link to={'/link'}>name</link>



// Hook
// const navigate =useNavigate()
// как работать с хуком
// navigate("/link")


function App() {
  return (
  
// !перемииновать AccountPage в ProfilePages

//!!!ПЕРЕДЕЛАТЬ КОМПОНЕНТ HERO вынести из него логику логика будет в mainPage - и переработать кнопки
    <Routes>
      <Route element={<AppLayout />} > 

      <Route path="/" element={<MainPage />} />
      <Route path="/genre" element={<GenrePage />} />
      <Route path="/genre/:genre" element={<MoviesByGenrePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />

      <Route path="profile" element={<AccountPage />} />
      <Route path="/login" element={<LoginPage />} />
      
      <Route path="*" element={<MainPage />} />

      </Route> 
    </Routes>

    // <>
    

    //   <MainPage />

    //  {/* <GenrePage /> */}

    //  {/* <MoviesByGenrePage /> */}

    //   {/* <FilmPage /> */}

    //   {/* <AccountPage /> */}

    //   {/* <LoginPage /> */}

   
    // </>

  );
}

export default App;
