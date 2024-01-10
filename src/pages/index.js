import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DateRangePicker } from 'devadnaan'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>  
        <DateRangePicker/>
      </main>
    </>
  )
}
