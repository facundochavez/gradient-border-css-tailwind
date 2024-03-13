import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import ColorsProvider from '@/context/colors.context';
import BorderSettingsProvider from '@/context/borderSettings.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'var(--color-primary)',
          borderRadius: 5,
        },
      }}
    >
      <BorderSettingsProvider>
        <ColorsProvider>
          <Component {...pageProps} />
        </ColorsProvider>
      </BorderSettingsProvider>
    </ConfigProvider>
  );
}
