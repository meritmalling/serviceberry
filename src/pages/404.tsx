import { Helmet } from "react-helmet-async";
import Services from "../components/ServicesButton";
import Contact from "../components/ContactButton";
import FAQ from "../components/FAQButton";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found – 404</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center text-center p-4">
        <h4 className="text-2xl mt-32">Sorry, we couldn't find what you're looking for.</h4>
        <span className="mt-4 text-xl flex flex-row gap-4">
          <FAQ />
          <Services />
          <Contact /> 
        </span>

      </div>
    </>
  );
};

export default NotFound;
