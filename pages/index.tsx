import Head from 'next/head';
import textsJson from '@/assets/texts.json';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    const { locale } = useRouter();

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
                    <About texts={filteredText.texts}/>
                    <Contact fields={filteredText.contact}/>
                </div>
            ))}
        </div>
    </>
  )
}
