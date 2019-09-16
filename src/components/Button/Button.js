import React from "react";
import classes from "./Button.module.scss";

export const Button = ({ children, href }) => {
  const Component = href ? "a" : "button";
  return <Component className={classes.Button}>{children}</Component>;
};
