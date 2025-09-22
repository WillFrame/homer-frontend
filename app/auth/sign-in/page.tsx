import React from 'react';
import Button from '@/components/button';
import Input from '@/components/input';
import styles from './styles.module.css';
import type {PageComponent} from './types';
import ThemeToggle from '@/modules/theme-toggle';

const SignIn: PageComponent = () => {
    return (
        <div className={styles['wrapper']}>
            <ThemeToggle />
            <Input />
            <Input />
            <Button>
                Войти
            </Button>
        </div>
    );
};

export default SignIn;
export type {PageComponent};
