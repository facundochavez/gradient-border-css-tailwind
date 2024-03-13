import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Gradient Border CSS & Tailwind</title>
        <meta
          name='description'
          content='App to generate gradient borders with CSS and Tailwind'
        />
        <link rel='icon' href='/favicon.svg' />
        {/* <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='/filadd-og-image.png' />
        <meta property='og:title' content='Filadd Review' />
        <meta
          property='og:description'
          content='Review de la web de Filadd hecha por Facundo Chavez'
        /> */}
        <meta name='google' content='notranslate' />
      </Head>
      <body className='h-screen w-screen bg-white'>
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#dfe1e5_1px,transparent_1px)] [background-size:16px_16px]'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
