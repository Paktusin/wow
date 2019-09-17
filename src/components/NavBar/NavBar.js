import React from "react";
import classes from "./NavBar.module.scss";
import clsx from "clsx";
import navBarData from "../../content/navbar.json";
import { MobileNav } from "../MobileNav/MobileNav";

export const NavBar = () => {
  const scrollPage = () => {
    setScrolled(window.scrollY > 50);
  };

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    scrollPage();
    window.addEventListener("scroll", scrollPage);
    return () => window.removeEventListener("scroll", scrollPage);
  }, []);

  return (
    <div className={clsx(classes.NavBar, { [classes.scrolled]: scrolled })}>
      <div>
        <MobileNav />
        <a className={classes.Logo} href="/">
          <div>
            <img src={navBarData.logo} alt="logo" />
          </div>
        </a>
        <nav className={classes.Menu}>
          {navBarData.menu.map((menuItem, key) => (
            <a href={menuItem.url}
              key={key}
              className={classes.MenuItem}
              data-text={menuItem.title}
            >
              <span>{menuItem.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
;