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
        <ul className="nav">
            {navBarData.menu.map(menuItem => (
              <li className="nav-item">
                <a className="nav-link" href={menuItem.url}>{menuItem.title}</a>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};
