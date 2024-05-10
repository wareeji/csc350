import "./globals.css";

import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KAKAO WEBTOON</title>
      </head>
      <body className='bg-[#121212] m-0 p-0 box-border'>
        {children}
      </body>
    </html>
  )
}