import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Div>
      <DivImg>
        <Img
          src={"https://codingapple1.github.io/shop/shoes1.jpg"}
          alt="상품사진"
          width="80%"
        />
        <H4>11</H4>
        <p>22</p>
      </DivImg>
    </Div>
  );
};
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  justify-content: center;
`;

const DivImg = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  text-align: center;
`;
const H4 = styled.h4``;

export default Detail;
