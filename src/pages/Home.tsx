import { Helmet } from 'react-helmet-async';
import Book from "../components/BookButton";   
import Services from "../components/ServicesButton";
import Contact from "../components/ContactButton";
import FAQ from "../components/FAQButton";
import eight from "../assets/images/signature-pro-wB9iWZKwljw-unsplash.jpg";
import eleven from "../assets/images/thought-catalog-Nv-vx3kUR2A-unsplash.jpg";
import fifteen from "../assets/images/windows-hNiNxhUfCfQ-unsplash.jpg";
import sixteen from "../assets/images/garrett-parker-x7ko46aTUaw-unsplash.jpg";
import { GiQuillInk } from 'react-icons/gi';


const services = [{
  image: fifteen,
  title: 'Notary Consult',
  subtitle: 'answering your questions',
  info: 'Washington State commissioned notary with $100,000 E&O insurance and NNA certification.',
  list: [
    'Answer your questions',
    'Review your documents',
    'Help you understand the process',
    'Help you understand the law',
  ],
  link: '/services#certified-insured',
},
{
  image: eight,
  title: 'Signing Agent',
  subtitle: 'for real estate closings',
  info: 'NNA-certified and experienced with real estate documents. We ensure accurate and complete signings for buyers, sellers, and refinances.',
  list: [
    'HELOCs, refinances, purchases',
    'Clear and courteous guidance',
    'Trusted by escrow officers and agents',
  ],
  link: '/services#loan-signing-agent-services',
 },
 {
  image: sixteen,
  title: 'Seattle Mobile ',
  subtitle: 'city metro and beyond',
  info: 'We travel to your location—home, office, hospital, or anywhere you need us. Professional, prompt, and personable service.',
  list: [
    'Same-day appointments',
    'Flexible locations across Seattle',
    'On-time and fully insured',
  ],
  link: '/services#mobile-notary',
 },
 {
  image: eleven,
  title: 'Remote Online',
  subtitle: 'on our secure platform',
  info: 'Legally recognized notarizations over a secure video platform. Access our services from anywhere in the U.S. or internationally.',
  list: [
    'Available 7 days a week',
    'Encrypted, compliant platform',
    'Ideal for POAs, wills, real estate',
  ],
  link: '/services#remote-online-notarization',
 },
];


const locations = [
  'Capitol Hill',
  'Ballard',
  'West Seattle',
  'Beacon Hill',
  'Shoreline',
  'U District'
];

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home - Serviceberry Notary Public</title>
        <meta name="description" content="Remote online and mobile notary services in Seattle. Reliable, certified, and flexible." />
        <link rel="canonical" href="https://serviceberrynotarypublic.com/" />
        <meta property="og:title" content="Serviceberry Notary Public - Seattle Notarial Services" />
        <meta property="og:description" content="Offering RON and mobile notary services across Seattle. Book now." />
      </Helmet>

      <main className="container mx-auto max-w-6xl">
        <section className="py-10">
          <div className="relative z-10 max-w-7xl mx-auto px-2 text-center">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 flex flex-wrap gap-x-3 gap-y-2 text-center justify-center px-4">
              <span className="inline-block animate-fade-in-down-1">Simple</span>
              <span className="text-gray-300 hidden sm:inline-block animate-fade-in-1">·</span>
              <span className="inline-block animate-fade-in-down-2">Secure</span>
              <span className="text-gray-300 hidden sm:inline-block animate-fade-in-2">·</span>
              <span className="animate-fade-in-down-3 flex items-center gap-2">
                Notarized              
                {/* <RiQuillPenAiLine className="text-gray-300 animate-fade-in-down-3 md:pb-1" /> */}
                <GiQuillInk className=" animate-fade-in-down-4 pb-1 md:pb-2" />
              </span>

            </h1>


            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 mb-8 animate-fade-in-up delay-200">
              From real estate closings to everyday documents, we make it easy to get it done — wherever you are, whenever you need it.
            </p>

            <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
              <Services />
              <Book />
            </div>
          </div>
        </section>

        <section className="pt-2 pb-10 animate-fade-in-up delay-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto p-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col"
              >
                <h1 className="text-2xl pb-4 font-bold text-shadow-xl text-center">{service.title}</h1>
                <h2 className="italic text-light-green text-center -mt-4 mb-4">{service.subtitle}</h2>

                <div
                  key={index}
                  onClick={() => {
                      window.location.href = service.link;
                    }}
                    className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 aspect-[3/4] group"
                >
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />
                  <div className="absolute inset-0 px-2 bg-white/60 hover:bg-white/85 opacity-100 transition-opacity duration-300 flex flex-col items-center text-center">
                    <p className="text-black text-sm py-6 group-hover:font-extrabold group-hover:pt-10">{service.info}</p>
                    <ul className="mt-4 list-disc list-inside text-xs">
                      {service.list.map((item, index) => (
                        <li key={index} className="text-xs pb-4">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 justify-items-center text-center lg:flex lg:flex-row md:justify-center">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center">
              <span className="whitespace-nowrap text-2xl font-bold text-shadow-xl mt-3 animate-fade-in-up delay-400">
                {location}
              </span>
              {index !== locations.length - 1 && (
                <span className="hidden lg:inline px-4 pt-2 text-2xl animate-fade-in-up delay-400">·</span>
              )}
            </div>
          ))}
        </div>


        <section className="p-4 my-10 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up delay-500">
          <div className="">
          <h1 className="text-2xl pb-4 font-bold text-dark-green text-shadow-xl mt-3 text-center">Learn More</h1>

          <h2 className=" text-gray-500 text-center -mt-2 mb-4">Have a question about our services? </h2>
          <h2 className=" text-gray-500 text-center -mt-4 mb-8">We're here to help.</h2>

            <div className="flex items-center justify-center gap-4 my-4">
              <FAQ />
              <Contact />
            </div>
          </div>
          <div className="">
          <h1 className="text-2xl pb-4 font-bold text-dark-green text-shadow-xl mt-3 text-center">Scheduling is Easy</h1>

          <h2 className=" text-gray-500 text-center -mt-2 mb-4">Book online or reach out directly</h2>
          <h2 className=" text-gray-500 text-center -mt-4 mb-8">we'll confirm your time and location.</h2>
            <div className="flex items-center justify-center gap-4 my-4">
              <Book />
            </div>
    
          </div>
        </section> 

      
      </main>
    </>
  );
};

export default Home;
