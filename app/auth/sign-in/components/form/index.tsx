'use client';
import React, {FC} from 'react';

import {FormValues} from './types';
import Input from '@/components/input';
import styles from './styles.module.css';
import {useForm} from 'react-hook-form';
import Button from '@/components/button';
import axios from 'axios';
import {API_URL} from 'consts/api-url';

const Form: FC = () => {
    const {handleSubmit, register, formState: {isValid}} = useForm<FormValues>();

    const onSubmit = handleSubmit((data) => {
        axios.post(`${API_URL}/auth/sign_in`, data);
    });

    return (
        <div className={styles['formWrapper']}>
            <Input placeholder="Логин" {...register('name')} />
            <Input placeholder="Пароль" {...register('password')} />
            <Button onClick={onSubmit} disabled={!isValid}>
                Войти
            </Button>
        </div>
    );
};

export default Form;
