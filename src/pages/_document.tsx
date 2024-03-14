import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='/favicon.svg' />
        <meta property='og:title' content='Gradient Border CSS & Tailwind' />
        <meta
          property='og:description'
          content='App to generate gradient borders with CSS and Tailwind'
        />
        <meta name='google' content='notranslate' />
      </Head>
      <body className='h-screen w-screen bg-white'>
        <Analytics />
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#dfe1e5_1px,transparent_1px)] [background-size:16px_16px]'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
