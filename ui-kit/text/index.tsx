import React from 'react';

import {Component} from './types';
import styles from './styles.module.css';
import {classNames} from '@/utils/classnames';

const Text: Component = ({
    as: Component = 'p',
    type = 'primary',
    children,
    additionalClasses = [],
    ...rest
}) => (
    <Component
        className={classNames(
            styles.text,
            styles[`text--${type}`],
            styles[`text--${Component}`],
            ...additionalClasses,
        )}
        {...rest}
    >
        {children}
    </Component>
);

export default Text;
