import React from "react";
import classes from "./NavBar.module.scss";
import clsx from "clsx";
import navBarData from "../../content/navbar.json";

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

  console.log(scrolled);

  return (
    <div className={clsx(classes.NavBar, { [classes.scrolled]: scrolled })}>
      <div>
        <div className={classes.Logo}>
          <img src={navBarData.logo} />
        </div>
        <nav className={classes.Menu}>
          {navBarData.menu.map((menuItem, key) => (
            <a
              key={key}
              className={classes.MenuItem}
              href={menuItem.url}
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
