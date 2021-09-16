// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Components
import Item from "./Item/Item";

// If you have any questions feel free to contact me @ tombrown4973@gmail.com

const Main = () => {
  return (
    <Wrapper>
      <div className="items">
        <Item
          header={"⛏ Start Building"}
          description={
            "Get started building your decentralized app or marketplace."
          }
          link={"/docs/intro"}
        />
        <Item
          header={"/src/components/home/main.js"}
          description={"Text here that links to a certain page 🔥"}
          link={"/docs/intro"}
        />
        <Item
          header={"/src/components/home/main.js"}
          description={"Text here that links to a certain page 🔥"}
          link={"/docs/intro"}
        />
        <Item
          header={"/src/components/home/main.js"}
          description={"Text here that links to a certain page 🔥"}
          link={"/docs/intro"}
        />
        <Item
          header={"/src/components/home/main.js"}
          description={"Text here that links to a certain page 🔥"}
          link={"/docs/intro"}
        />
        <Item
          header={"/src/components/home/main.js"}
          description={"Text here that links to a certain page 🔥"}
          link={"/docs/intro"}
        />
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  background-color: var(--main-background);
  animation: fade-in 0.5s;
  height: min-content;
  
  display: flex;
  justify-content: center;

  .items {
    //
    width: 1250px;
    @media only screen and (max-width: 1260px) {
      width: 100%;
    }
    //

    height: min-content;
    //
    padding: 50px 0px;
    @media only screen and (max-width: 500px) {
      padding: 50px 10px;
    }
    //

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(2.5vw);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
