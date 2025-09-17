'use client';

import { useT } from 'app/i18n/client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const ClientPage = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useT('client-page');

    return (
        <button
            onClick={() => (
                router.push(`/${pathname.slice(0, 3) === '/ru' ? 'en' : 'ru'}${pathname.slice(3)}`)
            )}
        >
            {t('hello')}
        </button>
    );
};

export default ClientPage;
