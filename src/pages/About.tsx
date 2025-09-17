import { Helmet } from 'react-helmet-async';
import logo from "../assets/images/ServiceberryLogo3.png";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Serviceberry Notary Public</title>
        <meta name="description" content="Learn more about us at serviceberrynotarypublic.com" />
        <link rel="canonical" href="https://serviceberrynotarypublic.com/about" />
        <meta property="og:title" content="About - Serviceberry Notary Public" />
        <meta property="og:description" content="Learn more at Serviceberry Notary Public." />
      </Helmet>
      <main className="relative container mx-auto max-w-4xl px-4 h-100">

        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
          style={{ backgroundImage: `url(${logo})` }}
        />

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>

          <section className="max-w-7xl mx-auto" id="about-us">
            {/* <h2 className="text-xl font-medium pb-4">About Us</h2> */}
            
            <p className="text-justify">At <span className="font-bold text-dark-pink">Serviceberry Notary Public</span>, we are committed to providing reliable, efficient, and personalized notarial services to our community. As a certified notary public based in Seattle, Washington, we specialize in witnessing and authenticating a variety of documents, ensuring that each notarization is conducted with the utmost integrity and in compliance with Washington State laws.</p>
          </section>

          <section className="max-w-7xl mx-auto py-4" id="our-mission">
            <h2 className="text-xl font-medium pb-4">Our Mission</h2>
            <p className="text-justify">Our mission is to make the notarization process seamless and accessible for individuals and businesses alike. Whether you require assistance with real estate documents, affidavits, powers of attorney, or other legal paperwork, we are here to facilitate your needs with professionalism and care.</p>
          </section>

          <section className="max-w-7xl mx-auto py-4" id="our-name">
            <h2 className="text-xl font-medium pb-4">Our Name</h2>
            <p className="text-justify">The name Serviceberry reflects our dedication to service and our deep roots in the Pacific Northwest. Just as the serviceberry plant is known for its resilience and adaptability, we strive to offer dependable and flexible notarial solutions tailored to your unique circumstances.</p>
          </section>

          <section className="max-w-7xl mx-auto py-4" id="our-commitment">
            <h2 className="text-xl font-medium pb-4">Our Commitment</h2>
            <p className="text-justify">Trust Serviceberry Notary to handle your important documents with the confidentiality and precision they deserve.</p>
          </section>
        </div>

      </main>

    </>
  );
};

export default About;


