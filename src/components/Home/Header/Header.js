// React
import React from "react";

// Styled Components
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1 className="title">Welcome to the Sperax Docs</h1>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  text-align: center;
  background-color: var(--main-background);

  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 32px;
    width: 100%;
    font-weight: 500; 
    margin: 0;
    padding: 0 10px;
    padding-top: 50px;
  }
`;
