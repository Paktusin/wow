import React from 'react';
import {Hero} from "./Hero/Hero";

const components = {
    hero: Hero
};

export const Component = ({__component, ...props}) => {
    const Comp = components[__component];
    return <Comp {...props}/>;
};