import "~/styles/globals.css"

import { appWithTranslation } from 'next-i18next'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='w-screen h-screen flex flex-row'>

      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(MyApp);
