import React from 'react';
import Button from '@/components/button';
import Input from '@/components/input';
import styles from './styles.module.css';
import type {PageComponent} from './types';
import Text from '@/ui-kit/text';

const SignIn: PageComponent = () => {
    return (
        <div className={styles['wrapper']}>
            <Text as='h1' additionalClasses={[styles['title']]}>Войти</Text>
            <Input placeholder="Логин" />
            <Input placeholder="Пароль" />
            <Button>
                Войти
            </Button>
        </div>
    );
};

export default SignIn;
export type {PageComponent};
