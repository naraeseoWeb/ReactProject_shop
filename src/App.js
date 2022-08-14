import "./App.css";
import Main from "./pages/Main";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Event from "./pages/Event";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>회원정보로 이동함</div>} />
          <Route path="location" element={<div>위치정보로 이동함</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>

        <Route path="*" element={"없는 페이지 입니다"} />
      </Routes>
    </div>
  );
}

export default App;
