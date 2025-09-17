import { getT } from '../../i18n';
import ClientPage from './client-component';

export async function generateMetadata() {
  const { t } = await getT('server-page')
  return { title: t('h1') }
}

export default async function Page({params, searchParams}) {
    const { t } = await getT('server-page');

    console.log(await params);

    return (
        <main>
            hi
            <ClientPage />
        </main>
    )
}