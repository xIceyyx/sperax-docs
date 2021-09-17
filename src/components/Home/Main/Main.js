// React
import React from "react";

// CSS
import classes from "./Main.module.css"

// Components
import Item from "./Item/Item";

// If you have any questions feel free to contact me @ tombrown4973@gmail.com

const Main = () => {
  return (
    <main className={classes.wrapper}>
      <div className={classes.items}>
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
    </main>
  );
};

export default Main;
