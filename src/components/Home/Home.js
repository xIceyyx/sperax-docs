// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Components
import Header from "./Header/Header";
import Main from "./Main/Main";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
