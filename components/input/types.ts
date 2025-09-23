import {InputProps} from '@headlessui/react';
import {FC} from 'react';

type Props = InputProps & {
    additionalClasses?: string[];
};

export type Component = FC<Props>;
