import React from 'react';

import {Component} from './types';
import Theme from './components/theme';

const PageProvider: Component = ({children}) => (
    <Theme>
        {children}
    </Theme>
);

export default PageProvider;
