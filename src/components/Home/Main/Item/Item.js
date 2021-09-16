// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Docusaurus
import Link from "@docusaurus/Link";

const Item = (props) => {
  const wrapperOnClickHandler = (props) => {};

  return (
    <Wrapper onClick={wrapperOnClickHandler}>
      <Link to={props.link} className="link">
        <h3 className="header">{props.header}</h3>
        <p className="description">{props.description}</p>
      </Link>
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  //
  width: 400px;
  @media only screen and (max-width: 415px) {
    width: 100%;
  }
  //

  border-radius: 15px;
  box-shadow: 0 8px 28px 4px rgba(86, 91, 115, 0.15);
  min-height: max-content;
  height: 150px;
  background-color: var(--ifm-navbar-background-color);
  cursor: pointer;
  transition-duration: 0.2s;
  padding: 25px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
  }

  .header {
    font-size: 22.5px;
    color: #47d5cd;
    margin: 0;
  }

  .description {
    color: var(--main-text-color);
    margin: 0;
  }

  .link {
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
`;
