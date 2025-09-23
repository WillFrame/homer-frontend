import React from 'react';

import {Component} from './types';
import {Input as HeadlessInput} from '@headlessui/react';
import styles from './styles.module.css';
import {classNames} from '@/utils/classnames';

const Input: Component = ({
    additionalClasses = [],
    ...rest
}) => {
    return (
        <HeadlessInput
            className={classNames(styles.input, ...additionalClasses)}
            {...rest}
        />
    );
};

export default Input;
