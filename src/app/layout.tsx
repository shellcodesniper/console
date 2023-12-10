import type { Metadata } from 'next'
import './globals.css'
import './fonts.css'
import Head from 'next/head'

// Font : "Monocraft","Mabry Pro","Gotham Bold","Spline Sans","Helvetica Neue","Google Sans","Work Sans",Arial,sans-serif

export const metadata: Metadata = {
  title: 'BDEV.IO',
  description: 'Dive into the world of programming, hacking, and cutting-edge technologies at bdev.io. Explore tutorials, insights, and resources to master coding languages, cybersecurity, and innovative tech realms.',
  authors: [{url: 'https://bdev.io', name: 'shellcodesniper'}],
  generator: 'Bdev',
  applicationName: 'BDEV.IO',
  referrer: 'origin-when-cross-origin',
  keywords: ['Hacking', 'Developer', 'Be Developer', 'rust', 'blog', 'docs'],
  creator: 'ShellcodeSniper',
  publisher: 'KuuwangE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Spline+Sans|Work+Sans|Fira+Mono|Fira+Sans|Google+Sans|Lexend+Deca&amp;display=swap" rel="stylesheet"></link>
      </Head>
      <body className={"None"}>
        {children}
      </body>
    </html>
  )
}
