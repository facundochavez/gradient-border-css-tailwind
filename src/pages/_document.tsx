import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='h-screen w-screen bg-white'>
        <Analytics />
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#dfe1e5_1px,transparent_1px)] [background-size:16px_16px]'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
