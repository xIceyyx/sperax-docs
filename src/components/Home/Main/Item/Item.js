// React
import React from "react";

// CSS
import classes from "./Item.module.css";

// Docusaurus
import { useHistory } from "@docusaurus/router";

const Item = (props) => {
  const history = useHistory();

  const wrapperHandler = () => {
    history.push(props.link);
  };

  return (
    <div className={classes.wrapper} onClick={wrapperHandler}>
      <h3 className={classes.header}>{props.header}</h3>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default Item;
