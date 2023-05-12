import { CounterProvider } from '@/data/contexts/CounterContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </ CounterProvider>
  )
}
