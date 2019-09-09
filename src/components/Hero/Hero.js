import React from 'react';
import classes from './Hero.module.scss'
import clsx from "clsx";

export const Hero = ({fullHeight, text, title}) => {
    return (
        <div className={clsx(classes.Hero, 'container-fluid')}
             style={{height: fullHeight ? '100vh' : 'auto'}}>
            <div className={'container'}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};