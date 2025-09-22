import {ButtonProps} from '@headlessui/react';
import {FC, PropsWithChildren} from 'react';

type Props = ButtonProps & {
    type?: 'primary' | 'secondary';
};

export type Component = FC<PropsWithChildren<Props>>;
