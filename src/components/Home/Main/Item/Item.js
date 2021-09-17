// React
import React from "react";

// CSS
import classes from "./Item.module.css";

// Docusaurus
import Link from "@docusaurus/Link";

const Item = (props) => {
  return (
    <div className={classes.wrapper}>
      <Link to={props.link} className="link">
        <h3 className={classes.header}>{props.header}</h3>
        <p className={classes.description}>{props.description}</p>
      </Link>
    </div>
  );
};

export default Item;
