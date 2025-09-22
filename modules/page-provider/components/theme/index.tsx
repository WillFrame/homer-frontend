import {Component} from './types';
import './globals.css';
import ThemeContext from './theme-context';

const Theme: Component = ({children}) => {
    return (
        <>
            {children}
            <ThemeContext />
        </>
    );
};

export default Theme;
