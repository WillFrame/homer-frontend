import React from 'react';
import {LayoutComponent} from './types';
import styles from './styles.module.css';

const RootLayout: LayoutComponent = ({children}) => {
    return (
        <div className={styles['pageWrapper']}>
            {children}
        </div>
    );
};

export default RootLayout;
