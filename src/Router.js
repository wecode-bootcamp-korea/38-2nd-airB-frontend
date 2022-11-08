import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './pages/Book/Book';
import Detail from './pages/Detail/Detail';
import Filter from './pages/Filter/Filter';
import Host from './pages/Host/Host';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import ListStore from './pages/Main/ListText';
import Main from './pages/Main/Main';
import MainLayout from './pages/Main/MainLayout';

const Router = () => {
  return (
    <ListStore>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/kakao/login" element={<KakaoLogin />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/booking/:userId" element={<Book />} />
            <Route path="/filter" element={<Filter />} />
          </Route>
          <Route path="/host" element={<Host />} />
        </Routes>
      </BrowserRouter>
    </ListStore>
  );
};

export default Router;
