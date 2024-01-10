import '@/styles/globals.css'

import 'devadnaan/lib/dist/rsuite-no-reset.min.css';
// import 'devadnaan/styles/index.less'

// import 'rsuite/dist/rsuite-no-reset.min.css';

import { CustomProvider } from 'devadnaan';



export default function App({ Component, pageProps }) {
  return (
    <CustomProvider>
      <Component {...pageProps} />
    </CustomProvider>
  )
}
