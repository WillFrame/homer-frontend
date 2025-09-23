import {FC, PropsWithChildren} from 'react';

type Props = {
    additionalClasses?: string[];
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    type?: 'primary' | 'secondary';
};

export type Component = FC<PropsWithChildren<Props>>;
