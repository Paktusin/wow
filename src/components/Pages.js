import React from 'react';
import pagesData from '../content/pages';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { ErrorHandler } from "./ErrorHandler";
import { Component } from "./Component";
import { NavBar } from "./NavBar/NavBar";

export const Pages = () => {
    return (
        <ErrorHandler>
            <BrowserRouter>
                <Switch>
                    {Object.keys(pagesData).map((path, key) => (
                        <Route key={key} exact path={'/' + path.replace('home', '')} render={(props) => <Page {...props} {...pagesData[path]} />} />
                    ))}
                </Switch>
            </BrowserRouter>
        </ErrorHandler>
    );
};

export const Page = ({ body, title }) => {
    return <div>
        <NavBar />
        {body.map((component, key) => <Component key={key} {...component} />)}
    </div>
};