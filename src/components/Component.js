import React from 'react';
import {Hero} from "./Hero/Hero";

const components = {
    hero: Hero
};

export const Component = ({component, ...props}) => {
    const Comp = components[component];
    return <Comp {...props}/>;
};