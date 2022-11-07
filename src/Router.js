import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Host from './pages/Host/Host';
import Detail from './pages/Detail/Detail';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import MainLayout from './pages/Main/MainLayout';
import Filter from './pages/Filter/Filter';
import Book from './pages/Book/Book';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/kakao/login" element={<KakaoLogin />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/booking/:userId" element={<Book />} />
        </Route>
        <Route path="/host" element={<Host />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
