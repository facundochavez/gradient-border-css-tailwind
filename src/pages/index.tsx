import Image from 'next/image';
import Header from '@/layouts/Header/Header';
import PreviewBox from '@/layouts/PreviewBox/PreviewBox';
import SamplesBox from '@/layouts/SamplesBox/SamplesBox';
import ColorsPicker from '@/layouts/ColorsPicker/ColorsPicker';
import BorderSettings from '@/layouts/BorderSettings/BorderSettings';
import CodeBox from '@/layouts/CodeBox/CodeBox';
import Footer from '@/layouts/Footer/Footer';
import TestBox from '@/layouts/TestBox/TestBox';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gradient Border CSS & Tailwind</title>
        <meta
          name='description'
          content='App to generate gradient borders with CSS and Tailwind'
        />
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='/favicon.svg' />
        <meta property='og:title' content='Gradient Border CSS & Tailwind' />
        <meta
          property='og:description'
          content='App to generate gradient borders with CSS and Tailwind'
        />
        <meta name='google' content='notranslate' />
      </Head>
      <Header />
      <main className='w-full max-w-[1000px] flex flex-col mb-8 gap-5 md:gap-6'>
        <section className='w-full max-w-[1000px] flex flex-col gap-4 md:gap-6 md:flex-row'>
          <main className='w-full h-[250px] mt-[5px] md:h-[unset] md:min-h-full'>
            <PreviewBox />
          </main>
          <aside className='w-full flex flex-col gap-3 md:gap-3 md:min-w-[380px]'>
            <ColorsPicker />
            <footer className='w-full flex flex-row-reverse gap-5 md:gap-6 md:flex-row'>
              <BorderSettings />
              <SamplesBox />
            </footer>
          </aside>
        </section>
        <section className='w-full max-w-[1000px] flex flex-col gap-4 md:gap-6 md:pr-[5px]'>
          <CodeBox />
        </section>
      </main>
      <Footer />
    </>
  );
}
