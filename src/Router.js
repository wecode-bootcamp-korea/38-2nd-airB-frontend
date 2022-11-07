import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Host from './pages/Host/Host';
import Detail from './pages/Detail/Detail';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import Filter from './pages/Filter/Filter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/host/14" element={<Host />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/kakao/login" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
