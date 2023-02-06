import Head from 'next/head';
import textsJson from '@/assets/texts.json';
import { useRouter } from 'next/router';
import { Divider } from '@chakra-ui/react';

export default function Home() {
    const { locale, locales, asPath } = useRouter();

    return (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Caio Basso portfolio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
            {textsJson.texts.filter(text => text.locale === locale).map(filteredText => (
                <li key={filteredText.locale}>
                    {filteredText.title}
                </li>
            ))}
        </div>
    </>
  )
}
