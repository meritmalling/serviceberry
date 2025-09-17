import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import { blogPosts } from "./index";


const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Serviceberry Notary Public</title>
        <meta name="description" content="Learn more about us at serviceberrynotarypublic.com" />
        <link rel="canonical" href="https://serviceberrynotarypublic.com/about" />
        <meta property="og:title" content="About - Serviceberry Notary Public" />
        <meta property="og:description" content="Learn more at Serviceberry Notary Public." />
      </Helmet>
      <div className="container">

      <div
        className="
          columns-1 
          sm:columns-2 
          md:columns-3 
          lg:columns-4 
        "
      >
        {blogPosts.map(({ metadata }) => (
          <Link
            key={metadata.slug}
            to={`/blog/${metadata.slug}`}
            className="break-inside-avoid rounded-lg bg-white p-6 mb-4 shadow-md hover:shadow-xl transition-shadow block"
          >
            <h2 className="text-xl font-semibold mb-2">{metadata.title}</h2>
            <p className="text-black">{metadata.teaser}</p>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;


