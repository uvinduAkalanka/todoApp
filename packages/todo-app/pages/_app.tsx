import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/tailwind.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp;
