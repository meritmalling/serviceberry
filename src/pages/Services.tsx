import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ImBubbles3 } from 'react-icons/im';
import { FaPlus, FaMinus, FaCaretRight } from 'react-icons/fa';

// const services = [
//   {
//     id: 'general-notarization',
//     title: 'General Notarization',
//     description:
//       'Our General Notarization services cover a broad range of everyday documents requiring legal authentication. Whether it\'s affidavits, powers of attorney, acknowledgments, jurats, or contracts, we ensure each document is notarized accurately and efficiently. Our notaries verify identities, witness signatures, and administer oaths or affirmations as needed, providing you with peace of mind that your documents are legally sound.',
//   },
//   {
//     id: 'mobile-notary-services',
//     title: 'Mobile Notary Services',
//     description:
//       'For your convenience, we offer Mobile Notary Services that bring our expertise directly to your location. Whether you\'re at home, in the office, or at a healthcare facility, our mobile notaries travel to you, saving you time and providing flexibility. This service is ideal for clients with busy schedules, mobility challenges, or urgent notarization needs.',
//   },
//   {
//     id: 'real-estate-loan-signings',
//     title: 'Real Estate & Loan Signings',
//     description:
//       'Navigating real estate transactions and loan agreements can be complex. Our specialized services in this area include notarizing documents for home purchases, refinances, HELOCs, reverse mortgages, and commercial property deals. We work closely with title companies, lenders, and real estate professionals to facilitate smooth and timely closings, ensuring all paperwork is executed correctly and in compliance with legal standards.',
//   },
//   {
//     id: 'legal-personal-documents',
//     title: 'Legal & Personal Documents',
//     description:
//       'We provide meticulous notarization services for a variety of legal and personal documents. This includes wills, trusts, adoption papers, guardianship forms, and immigration documents. Our notaries ensure that each document is handled with the utmost care, verifying all necessary details to uphold the document\'s integrity and your intentions.',
//   },
//   {
//     id: 'business-financial-services',
//     title: 'Business & Financial Services',
//     description:
//       'Our Business & Financial Notary Services cater to the needs of entrepreneurs, corporations, and financial institutions. We handle the notarization of corporate resolutions, partnership agreements, loan documents, vendor contracts, and more. By ensuring these documents are properly executed, we help protect your business interests and maintain compliance with legal requirements.',
//   },
//   {
//     id: 'specialty-services',
//     title: 'Specialty Services',
//     description:
//       'Beyond standard notarizations, we offer Specialty Services to meet unique and specific needs. This includes apostille processing for international document recognition, fingerprinting services, document courier services, and acting as a witness for various legal proceedings. Our comprehensive approach ensures that even your most specialized notarization requirements are met with professionalism and precision.',
//   },
//   {
//     id: 'remote-online-notarization',
//     title: 'Remote Online Notarization',
//     description:
//       'Embrace the convenience of our Remote Online Notarization (RON) services, allowing you to have documents notarized securely from anywhere. Utilizing state-of-the-art technology, we conduct virtual notarization sessions that are legally recognized and compliant with state regulations. This service is perfect for clients who prefer or require remote interactions without compromising on security or legality.',
//   },
// ];

const services = [
  {
    id: 'general-notarization',
    title: 'General Notarization',
    description: `Our General Notarization services cater to a wide range of everyday documents that require legal authentication. Whether you need affidavits, powers of attorney, acknowledgments, jurats, or contracts, we ensure each document is notarized with accuracy and care.
      
      Our experienced notaries verify identities thoroughly, witness signatures, and administer oaths or affirmations as needed. Every step is executed with precision to ensure your documents are legally sound and fully compliant with local and national laws.
      
      The process is straightforward and efficient, allowing you to have the peace of mind knowing your documents are correctly notarized. We are committed to making sure all your documents are processed quickly, securely, and in compliance with the law.
    `,
  },
  {
    id: 'mobile-notary-services',
    title: 'Mobile Notary Services',
    description: `Our Mobile Notary Services offer unmatched convenience by bringing our notary services to your location. Whether at your home, office, healthcare facility, or any other location, our mobile notaries come directly to you, saving time and providing flexibility.
      
      This service is ideal for those with busy schedules, mobility challenges, or urgent notarization needs. We understand that your time is precious, which is why we make it as easy as possible for you to get the notarizations you need.
      
      From witnessing signatures to administering oaths, we bring the full range of notarial services to your doorstep, ensuring the same level of professionalism and security as in-office appointments.
    `,
  },
  {
    id: 'real-estate-loan-signings',
    title: 'Real Estate & Loan Signings',
    description: `Real estate transactions and loan agreements often come with complex paperwork that must be executed with precision. Our specialized services focus on notarizing critical documents related to home purchases, refinances, HELOCs, reverse mortgages, and commercial property deals.
      
      We collaborate closely with title companies, lenders, and real estate professionals to ensure seamless and timely closings. Our notaries ensure that every document is executed correctly and legally binding, minimizing delays and protecting your interests.
      
      Whether you’re finalizing a residential or commercial transaction, our services will provide you with the confidence that your documents are properly notarized, giving you peace of mind during the entire closing process.
    `,
  },
  {
    id: 'legal-personal-documents',
    title: 'Legal & Personal Documents',
    description: `Our notarization services extend to a variety of legal and personal documents that require careful attention to detail. These include wills, trusts, adoption papers, guardianship forms, and immigration documents. Our notaries understand the sensitivity of these documents and treat them with the utmost respect.
      
      Each document is thoroughly reviewed to ensure its accuracy and legal integrity. By verifying necessary signatures and administering oaths or affirmations, we make sure the document reflects your true intentions and adheres to legal requirements.
      
      Whether it’s preparing for estate planning, navigating complex legal matters, or securing your family’s future, our notary services give you the assurance that your personal documents are handled professionally and legally.
    `,
  },
  {
    id: 'business-financial-services',
    title: 'Business & Financial Services',
    description: `Our Business & Financial Notary Services cater to entrepreneurs, corporations, financial institutions, and other businesses in need of notary services for important legal and financial documents. We handle corporate resolutions, partnership agreements, loan documents, vendor contracts, and much more.
      
      We ensure that your documents are notarized correctly, protecting your business interests and maintaining compliance with legal requirements. With our services, you can focus on growing your business, knowing that your essential legal documents are in good hands.
      
      Our notaries are familiar with the unique needs of businesses and financial institutions, providing accurate and reliable notarizations every time to help maintain smooth business operations and minimize legal risks.
    `,
  },
  {
    id: 'specialty-services',
    title: 'Specialty Services',
    description: `In addition to standard notarizations, we also provide Specialty Services for unique needs. These include:\n\n`,
    listItems: [
      'Apostille processing for international document recognition',
      'Fingerprinting services for background checks or employment purposes',
      'Document courier services for secure and timely delivery',
      'Acting as a witness for legal proceedings'
    ],
  },
  {
    id: 'remote-online-notarization',
    title: 'Remote Online Notarization',
    description: `Our Remote Online Notarization (RON) services allow you to have your documents notarized without leaving the comfort of your home or office. Using cutting-edge technology, we offer secure virtual notarization sessions that comply with all legal and security standards.
      
      RON allows you to meet with a certified notary through video conferencing, completing the notarization process in real time. This service is perfect for clients who are geographically distant, have mobility limitations, or prefer the convenience of handling legal matters remotely.
      
      With our Remote Online Notarization services, you can rest assured that your notarizations are as valid and legally binding as in-person appointments, all while enjoying the flexibility and convenience of a virtual experience.
    `,
  },
];



const quotes = [
  {
    quote: 'What was a lifesaver! I needed a notary for a last-minute document, and they were able to accommodate me with same-day service.',
    author: 'A. Smith, Kirland, WA',
  },  
  {
    quote: 'Quick, courteous, and clear. I needed a notarization from overseas and Serviceberry made it seamless.',
    author: 'R. Thompson, Remote Client',
  },
  {
    quote: 'Serviceberry came to my hospital room on short notice and handled everything with compassion and professionalism.',
    author: 'J. Daniels, Capitol Hill, WA',
  },
];  

const Services = () => {

  // Customer Quotes Scripts
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Open FAQ Scripts
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = window.location.hash.replace('#', '');
      const serviceIndex = services.findIndex((service) => service.id === id) 
      if (serviceIndex !== -1) {
        setActiveIndex(serviceIndex);
      }
    } else {
      setActiveIndex(null);
    }
  }, [location]);


  const toggleIndex = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (
    <>
      <Helmet>
        <title>Services - Serviceberry Notary Public</title>
        <meta name="description" content="Learn more about us at serviceberrynotarypublic.com" />
        <link rel="canonical" href="https://serviceberrynotarypublic.com/about" />
        <meta property="og:title" content="About - Serviceberry Notary Public" />
        <meta property="og:description" content="Learn more at Serviceberry Notary Public." />
      </Helmet>

      <main className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        <p><strong>Your time is valuable — we make notarization fast, flexible, and reliable. </strong></p>
        <p className='pt-2'> Whether you need in-person or remote notarization, our certified professionals are here to help with secure, accurate, and legally compliant service. From real estate documents to power of attorney and everything in between, we offer convenient options tailored to your schedule.</p>

        <section className="max-w-4xl mx-auto pt-12">

          <div className="space-y-4">


          {services.map((service, index) => (
  <div key={service.id} id={service.id} className="border-b border-gray-300 pb-4">
    <button
      onClick={() => toggleIndex(index)}
      className="flex justify-between items-center w-full text-left text-black font-medium text-lg"
    >
      <span>{service.title}</span>
      <span className="ml-4">
        {activeIndex === index ? (
          <FaMinus className="text-dark-green text-sm" />
        ) : (
          <FaPlus className="text-dark-green text-sm" />
        )}
      </span>
    </button>

    <div
      className={`mt-3 text-sm text-gray-700 transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
    >
      <div
        className="text-justify"
        style={{ whiteSpace: 'pre-line' }}
        dangerouslySetInnerHTML={{ __html: service.description }}
      />

      {/* Render list items with FaCaretRight icon */}
      {service.listItems && (
        <ul className="flex flex-col gap-2 list-disc list-inside">
          {service.listItems.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <FaCaretRight className="text-dark-green mr-2" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
))}



          </div>
        </section>

        <section className="m-4 py-10 relative min-h-48">
          <h1 className="text-2xl pb-4 font-bold text-dark-green text-shadow-xl mt-3 text-center">
            What Our Clients Say
          </h1>

          <div className="relative w-full max-w-3xl mx-auto">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-full transform -translate-y-1/2 md:bg-white md:bg-opacity-70 md:hover:bg-opacity-100 md:p-2 md:rounded-full md:shadow-md"
              aria-label="Previous Quote"
            >
              <FaChevronLeft className="text-light-green" />
            </button>

            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <blockquote>
                <p className="italic text-gray-700 font-light text-center mx-auto max-w-lg">
                  {quotes[currentIndex].quote}
                </p>
                <footer className="mt-4 flex items-center justify-center text-sm text-light-green italic">
                  <ImBubbles3 className="mr-2 text-light-green" />
                  {quotes[currentIndex].author}
                </footer>
              </blockquote>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-full transform -translate-y-1/2 md:bg-white md:bg-opacity-70 md:hover:bg-opacity-100 md:p-2 md:rounded-full md:shadow-md"
              aria-label="Next Quote"
            >
              <FaChevronRight className="text-light-green" />
            </button>
          </div>
        </section>

      </main>
    </>
  );
};

export default Services;



// Real Estate Documents

// Loan Packages

// (Certified Loan Signing Agent)

// Deeds

// Mortgages

// Lease agreements

// Property transfers

// Legal Documents

// Affidavits

// Power of Attorney

// Wills

// Trusts

// Contracts

// Sworn statements

// Court pleadings

// Legal certifications

// Financial Documents

// Loan documents

// Promissory notes

// Financial affidavits

// Business agreements

// Articles of incorporation

// Corporate resolutions

// Government Forms

// Social Security forms

// I-9 Verification

// Certified Copies of 

// Driver's licenses

// Passports

// Certificate of Title​

// Planning Documents

// Advance healthcare directives

// Living wills

// Healthcare power of attorney

// Travel forms

// Visa requirements

// Passport applications

// Immigration documents