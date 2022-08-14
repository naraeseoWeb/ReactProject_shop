import React, { useState } from "react";
import styled from "styled-components";
import data from "../data";
import bg from "../img/bg.png";

const Main = () => {
  const [shoes] = useState(data);

  return (
    <>
      <MainBg />

      <Container>
        <Ul>
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i} key={i} />;
          })}
        </Ul>
      </Container>
    </>
  );
};

const Card = ({ shoes, i, Children }) => {
  return (
    <Li>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"}
        alt="상품사진"
        width="80%"
      />
      <H4>{shoes.title}</H4>
      <p>{shoes.content}</p>
    </Li>
  );
};
const MainBg = styled.div`
  height: 300px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  width: 100%;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  width: 25%;
  min-width: 400px;
  text-align: center;
`;

const H4 = styled.h4`
  line-height: 40px;
`;

export default Main;
Main.Card = Card;
