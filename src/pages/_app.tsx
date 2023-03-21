import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import { NextPage } from 'next/types';

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any;
}


const MyApp: NextPage<AppLayoutProps> = ({ Component, pageProps }) => {

  const Layout = Component.layout || (({ children }) => <>{children}</>);
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="google-site-verification" content="d_Z0doP666Lm0u8e3DB4BMNCrtutRdIkup20TTWPEVM" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;