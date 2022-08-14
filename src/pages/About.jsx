import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  const Navigate = useNavigate();

  return (
    <>
      <Div>
        <h3>회사 정보</h3>
        <div
          onClick={() => {
            Navigate("/about/member");
          }}
        >
          회원정보로 이동하기
        </div>
        <div
          onClick={() => {
            Navigate("/about/location");
          }}
        >
          위치정보로 이동하기
        </div>
        <Outlet></Outlet>
      </Div>
    </>
  );
};

const Div = styled.div`
  text-align: center;
  cursor: pointer;
`;

export default About;
