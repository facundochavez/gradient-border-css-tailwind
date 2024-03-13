import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import ColorsProvider from '@/context/colors.context';
import BorderSettingsProvider from '@/context/borderSettings.context';
import CodeProvider from '@/context/code.context';

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
          <CodeProvider>
            <Component {...pageProps} />
          </CodeProvider>
        </ColorsProvider>
      </BorderSettingsProvider>
    </ConfigProvider>
  );
}
