import React from 'react';

import {Component} from './types';
import {Button as HeadlessButton} from '@headlessui/react';
import styles from './styles.module.css';

const Button: Component = ({
    children = 'Button',
    type = 'primary',
    ...rest
}) => (
    <HeadlessButton
        className={styles.button}
        {...rest}
    >
        {children}
    </HeadlessButton>
);

export default Button;
