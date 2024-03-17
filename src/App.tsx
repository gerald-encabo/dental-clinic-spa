import Layout from './structure/Layout'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/global-style.scss'

function App() {

  return (
    <>
      <Layout />
      <Analytics />
    </>
  )
}

export default App
