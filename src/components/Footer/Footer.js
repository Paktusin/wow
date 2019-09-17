import React from 'react';
import classes from './Footer.module.scss';
import age from '../../img/21.png';
import navBarData from "../../content/navbar.json";

export const Footer = () => {
    return (
        <footer className={classes.Footer}>
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
            <img className={classes.Age} src={age} alt="age" />
        </footer>
    );
}