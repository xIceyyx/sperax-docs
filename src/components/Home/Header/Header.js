// React
import React from "react";

// CSS
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.wrapper}>
      <h1 className={classes.title}>Welcome to the Sperax Docs</h1>
    </header>
  );
};

export default Header;
