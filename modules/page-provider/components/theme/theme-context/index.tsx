'use client';
import {FC, useEffect} from 'react';

import {DEFAULT_THEME, THEME_ATTRIBUTE} from 'consts/theme';

const ThemeContext: FC = () => {
    useEffect(() => {
        document.documentElement.setAttribute(THEME_ATTRIBUTE, DEFAULT_THEME);
    }, []);

    return null;
};

export default ThemeContext;
