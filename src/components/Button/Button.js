import React from "react";
import classes from "./Button.module.scss";
import clsx from "clsx";

export const Button = ({ children, href, primary }) => {
  const Component = href ? "a" : "button";
  return <Component href={href} className={clsx(classes.Button, { [classes.Primary]: primary })}>{children}</Component>;
};
