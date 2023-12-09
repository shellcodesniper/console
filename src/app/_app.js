import '../styles/globals.css'
import dynamic from 'next/dynamic'

// const App = dynamic(() => import('../components/App'), { ssr: false })

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return <SafeHydrate><Component {...pageProps} /></SafeHydrate>
}

const AppWithNoSSR = dynamic(MyApp, {
  ssr: false
})

export default AppWithNoSSR;
