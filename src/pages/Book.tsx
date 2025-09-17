import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const InlineWidget = lazy(() => import('react-calendly').then(mod => ({ default: mod.InlineWidget })));

const Book = () => {
  return (
    <>
      <Helmet>
        <title>Book - Serviceberry Notary Public</title>
        <meta name="description" content="Learn more about us at xxxx.com" />
        <link rel="canonical" href="https://serviceberrynotary.com/about" />
        <meta property="og:title" content="About - Serviceberry Notary Public" />
        <meta property="og:description" content="Learn more at serviceberrynotary." />
      </Helmet>
      <main className="container mx-auto max-w-4xl px-4">
        <Suspense fallback={<div>Loading booking widget...</div>}>
          <InlineWidget url="https://calendly.com/admin-serviceberrynotary/30min" />
        </Suspense>
      </main>
    </>
  );
};

export default Book;
