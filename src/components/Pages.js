import React from 'react';
import pagesData from '../pages';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {ErrorHandler} from "./ErrorHandler";
import {Component} from "./Component";

export const Pages = () => {
    return (
        <ErrorHandler>
            <BrowserRouter>
                <Switch>
                    {Object.keys(pagesData).map((path, key) => (
                        <Route key={key} exact path={'/' + path.replace('home', '')}
                               render={(props) => <Page {...props} {...pagesData[path]}/>}/>
                    ))}
                </Switch>
            </BrowserRouter>
        </ErrorHandler>
    );
};

export const Page = ({body, title}) => {
    return <div>
        {Object.keys(body).map((component, key) => <Component key={key} __component={component} {...body[component]}/>)}
    </div>
};