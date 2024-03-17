import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Main from '@/pages/Main';
import ErrorFallback from '@/components/ErrorFallback';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Spinner } from 'react-bootstrap';

const Layout = () => {

  return (
    <>
      <Navbar />
      <ErrorBoundary
        FallbackComponent={ErrorFallback} 
        onError={() => console.log("Error happened!")}
        >
          <Suspense fallback={<Spinner />} >
              <Main />
              <Footer />
          </Suspense>
        </ErrorBoundary>
    </>
  )
}

export default Layout