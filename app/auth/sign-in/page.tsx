import React from 'react';
import styles from './styles.module.css';
import type {PageComponent} from './types';
import Text from '@/ui-kit/text';
import Form from './components/form';

const SignIn: PageComponent = () => {
    return (
        <div className={styles['wrapper']}>
            <Text as='h1' additionalClasses={[styles['title']]}>Войти</Text>
            <Form />
        </div>
    );
};

export default SignIn;
export type {PageComponent};
