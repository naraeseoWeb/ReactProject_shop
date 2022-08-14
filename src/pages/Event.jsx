import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Event = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <h4>오늘의 이벤트</h4>
      <p onClick={() => navigate("/event/one")}>1번 이벤트 바로가기</p>
      <p onClick={() => navigate("/event/two")}>2번 이벤트 바로가기</p>
      <Outlet></Outlet>
    </Div>
  );
};

const Div = styled.div`
  text-align: center;
  cursor: pointer;
`;

export default Event;
