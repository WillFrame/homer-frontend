import React from 'react';
import {LayoutComponent} from './types';
import styles from './styles.module.css';
import ThemeToggle from '@/modules/theme-toggle';

const RootLayout: LayoutComponent = ({children}) => {
    return (
        <section className={styles['pageWrapper']}>
            {children}
            <ThemeToggle />
        </section>
    );
};

export default RootLayout;
