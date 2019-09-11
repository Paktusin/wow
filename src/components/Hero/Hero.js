import React from "react";
import classes from "./Hero.module.scss";
import clsx from "clsx";
import { Button } from "../Button/Button";

export const Hero = ({ fullHeight, text, title, buttons, image, video }) => {
  const style = {
    height: fullHeight ? "100vh" : "auto",
    backgroundImage: `url(${image})`
  };

  return (
    <div
      className={clsx(classes.Hero, "container-fluid", {
        [classes.fullHeight]: fullHeight
      })}
      style={style}
    >
      {video && (
        <div className={classes.Video}>
          <video
            src={video}
            loop="loop"
            muted="muted"
            autoplay="autoplay"
            playsinline="playsinline"
          ></video>
        </div>
      )}
      <div className={"container"}>
        <h1 className={classes.Title}>{title}</h1>
        <p className={classes.Text}>{text}</p>
        <div className={classes.Buttons}>
          {buttons.map(button => (
            <Button>{button.text}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};
