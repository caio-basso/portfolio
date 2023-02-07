import Head from 'next/head';
import textsJson from '@/assets/texts.json';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

export default function Home() {
    const { locale, locales, asPath } = useRouter();

    return (
    <>
        <Head>
            <title>Caio Basso</title>
            <meta name="description" content="Caio Basso portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
            {textsJson.texts.filter(text => text.locale === locale).map(filteredText => (
                <div key={filteredText.locale}>
                    <Navbar nav={filteredText.nav}/>
                </div>
            ))}
        </div>
    </>
  )
}
