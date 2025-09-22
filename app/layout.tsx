import React from 'react';
import PageProvider from '@/modules/page-provider';
import {LayoutComponent} from './types';

const RootLayout: LayoutComponent = ({children}) => {
    return (
        <html lang="ru" data-theme="light">
            <body>
                <PageProvider>
                    {children}
                </PageProvider>
            </body>
        </html>
    );
};

export default RootLayout;