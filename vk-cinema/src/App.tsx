// import MainPage from "./pages/MainPage";

import HeaderLayout from "./layouts/HeaderLayout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    // !сделать Strict mode!
    <>
      <HeaderLayout />

      <MainPage />
    </>

    // <>
    //   <header className="header">
    //     {/* logo */}
    //     <img src="" alt="Логотип VK Маруся" />

    //     {/* nav */}
    //     <nav>
    //       <ul className="list-nav">
    //         <li>
    //           <a className="link-nav" href="#">
    //             Главная
    //           </a>
    //         </li>
    //         <li>
    //           <a className="link-nav" href="#">
    //             Жанры
    //           </a>
    //         </li>
    //       </ul>

    //       {/* поиск - резиновый */}
    //       <div>Поиск</div>
    //     </nav>

    //     {/* логин */}
    //   </header>

    //   <main>
    //     <section className="content"></section>
    //   </main>
    // </>
  );
}

export default App;
