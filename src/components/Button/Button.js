import React from "react";
import classes from "./Button.module.scss";

export const Button = ({ children, href }) => {
  const component = href ? "a" : "button";
  return <component clasName={classes.Button}>{children}</component>;
};
