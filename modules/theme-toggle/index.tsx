'use client';
import Button from '@/components/button';
import {THEME_ATTRIBUTE} from 'consts/theme';
import {FC} from 'react';

const ThemeToggle: FC = () => {
    const toggleTheme = (theme: string) => {
        document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    };

    return (
        <div>
            <Button onClick={() => toggleTheme('light')}>Светлая</Button>
            <Button onClick={() => toggleTheme('dark')}>Темная</Button>
        </div>
    );
};

export default ThemeToggle;