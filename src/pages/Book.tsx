import { Helmet } from 'react-helmet-async';
import { InlineWidget } from 'react-calendly';

const Book = () => {
  return (
    <>
      <Helmet>
        <title>Book - Serviceberry Notary Public</title>
        <meta name="description" content="Learn more about us at serviceberrynotarypublic.com" />
        <link rel="canonical" href="https://serviceberrynotarypublic.com/about" />
        <meta property="og:title" content="About - Serviceberry Notary Public" />
        <meta property="og:description" content="Learn more at Serviceberry Notary Public." />
      </Helmet>
      <main className="container mx-auto max-w-4xl px-4">
        <InlineWidget url="https://calendly.com/admin-serviceberrynotary/30min" />
      </main>
    </>
  );
};

export default Book;
