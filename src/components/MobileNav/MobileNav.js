import React from 'react';
import classes from './MobileNav.module.scss'
import navBarData from "../../content/navbar.json";

export const MobileNav = () => {

    function clickHandler(open) {
        setOpen(open);
        if (open) {
            document.body.style.setProperty('overflow', 'hidden');
        } else {
            document.body.style.removeProperty('overflow');
        }

    }

    const [open, setOpen] = React.useState(true);
    const left = open ? 0 : -320;

    return (
        <>
            <button className={classes.HamBtn} onClick={e => clickHandler(true)}></button>
            <div className={classes.MobileMenu} style={{ left }}>
                <button className={classes.CloseBtn} onClick={e => clickHandler(false)}></button>
                <div>
                    <a className={classes.Logo} href="/">
                        <div>
                            <img src={navBarData.logo} alt="logo" />
                        </div>
                    </a>
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
            {open && <div className={classes.Overlay} onClick={e => clickHandler(false)}></div>}
        </>
    )
}