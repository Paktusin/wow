import React from "react";
import classes from "./Hero.module.scss";
import clsx from "clsx";
import { Button } from "../Button/Button";

export const Hero = ({ fullHeight, text, title, buttons, image, video, id }) => {
  const style = {
    height: fullHeight ? "100vh" : "auto",
    backgroundImage: `url(${image})`
  };
  const videoRef = React.useRef();

  React.useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) videoEl.querySelector('video').play();
  }, [])

  return (
    <div
      id={id}
      className={clsx(classes.Hero, "container-fluid", {
        [classes.fullHeight]: fullHeight
      })}
      style={style}
    >
      {video && (
        <div className={classes.Video} ref={videoRef}>
          <video
            src={video}
            loop="loop"
            muted="muted"
            autoplay="autoplay"
            playsinline="playsinline"
          ></video>
        </div>
      )}
      <div className={classes.FadeOverlay}></div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-12 col-lg-6 col-md-8"}>
            <h1 className={classes.Title}>{title}</h1>
            <p className={classes.Text}>{text}</p>
            <div className={classes.Buttons}>
              {buttons.map((button, key) => (
                <Button key={key} {...button}>{button.text}</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
