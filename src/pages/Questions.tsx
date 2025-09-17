import { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FaCaretRight } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    id: 'what-is-a-notary-public',
    question: 'What is a Notary Public?',
    answer: (
      <p className="text-justify">
        A Notary Public is a state-appointed official who serves as an impartial witness during the signing of important documents. Their role is to verify the identity of signers, ensure they are signing willingly and knowingly, and help prevent fraud.
      </p>
    ),
  },
  {
    id: 'what-types-of-documents-can-you-notarize',
    question: 'What types of documents can you notarize?',
    answer: (
      <>
        <p className="text-justify pb-2">Common documents we notarize include:</p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li className="inline-flex items-center gap-2"><FaCaretRight />Affidavits</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Powers of Attorney</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Real estate documents (e.g. deeds, mortgages)</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Loan documents</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Trusts and wills</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Medical directives</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Business contracts</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Travel consent forms for minors</li>
        </ul>
      </>
    ),
  },
  {
    id: 'what-do-i-need-to-bring-to-the-notarization-appointment',
    question: 'What do I need to bring to the notarization appointment?',
    answer: (
      <>
        <p className="text-justify pb-2">Please ensure you have:</p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li className="inline-flex items-center gap-2">
            <FaCaretRight />
            The complete, <em>unsigned</em> document(s) to be notarized
          </li>
          <li className="inline-flex items-center gap-2">
            <FaCaretRight />
            A valid, government-issued photo ID (e.g. driver's license, passport)
          </li>
          <li className="inline-flex items-center gap-2">
            <FaCaretRight />
            Any other individuals who need to sign the document, along with their valid IDs
          </li>
        </ul>
        <p className="text-justify pb-2 pt-4">
          <strong>Note:</strong> For RON appointments,{" "}
          <Link
            to="/questions#how-do-I-prepare-for-remote-online-notarization"
            onClick={() => {
              setTimeout(() => {
                const el = document.getElementById("how-do-I-prepare-for-remote-online-notarization");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 0);
            }}
            className="text-light-green hover:text-dark-green hover:font-semibold"
          >
            additional preparation is needed
          </Link>.
        </p>
      </>
    ),
  },
  {
    id: 'what-forms-of-identification-are-acceptable',
    question: 'What forms of identification are acceptable?',
    answer: (
      <>
        <p className="text-justify pb-2">
          Acceptable IDs must be current and issued by a federal or state government agency, containing the individual's photograph, signature, and physical description. Examples include:
        </p>
        <ul className="pt-4 flex flex-col gap-2 list-disc list-inside">
          <li className="inline-flex items-center gap-2"><FaCaretRight />State driver's license</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />U.S. passport</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />Military ID</li>
          <li className="inline-flex items-center gap-2"><FaCaretRight />State-issued ID card</li>
        </ul>
        <p className="pt-4 text-justify"><strong>Note:</strong> Expired IDs are not accepted.</p>
      </>
    ),
  },
  {
    id: 'what-is-remote-online-notarization',
    question: 'What is Remote Online Notarization (RON)?',
    answer: (
      <p className="text-justify">
        Remote Online Notarization (RON) is a secure and convenient way to notarize documents without the need for an in-person appointment. It allows you to sign and notarize documents remotely using video conferencing technology.
      </p>
    ),
  },
  {
    id: 'how-do-I-prepare-for-remote-online-notarization',
    question: 'What do I need to do for Remote Online Notarization (RON)?',
    answer: (
      <div className="space-y-6">
        <div>
          <h3 className="inline-flex items-center gap-2 font-medium py-2"><FaCaretRight />Identification</h3>
          <p className="text-justify">
            The signer must provide valid unexpired United States identification showing proof of identity. This can include a driver's license, US passport, or state ID. A permanent resident card or military ID is currently not accepted.
          </p>
        </div>

        <div>
          <h3 className="inline-flex items-center gap-2 font-medium py-2"><FaCaretRight />Compatible Device</h3>
          <p className="text-justify">
            A smartphone, tablet, or computer is required to complete a remote online notarization. The device will need audio and video capabilities. This is a state-required regulation.
          </p>
        </div>

        <div>
          <h3 className="inline-flex items-center gap-2 font-medium py-2"><FaCaretRight />Internet Connection</h3>
          <p className="text-justify">
            A reliable and secure internet connection is essential for a smooth remote online notary appointment. Make sure to have a strong and stable connection before your appointment to avoid any technical issues.
          </p>
        </div>

        <p className="text-justify">
          <strong>Note:</strong> As a responsible notary service provider, we have strict policies in place to ensure that we only notarize documents for U.S. businesses. We understand the importance of authenticity and credibility, and provide services in line with U.S. laws and regulations.
        </p>
      </div>
    ),
  },
  {
    id: 'can-you-notarize-documents-for-someone-who-isnt-present',
    question: "Can you notarize documents for someone who isn't present?",
    answer: (
      <p className="text-justify">
        No. Washington State law requires that all signers be physically present before the notary at the time of notarization. When doing Remote Online Notarization (RON), Washington requires all signers call in from the same location.
      </p>
    ),
  },
  {
    id: 'what-is-your-cancellation-policy',
    question: 'What is your cancellation policy?',
    answer: (
      <p className="text-justify">
        We understand that plans can change. Please provide at least 24 hours' notice for cancellations or rescheduling. Cancellations with less than 24 hours' notice are subject to a cancellation fee.
      </p>
    ),
  },
  {
    id: 'are-your-services-confidential',
    question: 'Are your services confidential?',
    answer: (
      <p className="text-justify">
        Absolutely. All notarizations are conducted with the utmost confidentiality and in compliance with Washington State laws and ethical standards.
      </p>
    ),
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = window.location.hash.replace('#', '');
      const faqIndex = faqs.findIndex((faq) => faq.id === id) 
      if (faqIndex !== -1) {
        setActiveIndex(faqIndex);
      }
    }
  }, [location]);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  
  return (
    <>
      <Helmet>
        <title>Questions - Serviceberry Notary Public</title>
        <meta name="description" content="Learn more about us at serviceberrynotarypublic.com" />
        <link rel="canonical" href="https://serviceberrynotarypublic.com/about" />
        <meta property="og:title" content="About - Serviceberry Notary Public" />
        <meta property="og:description" content="Learn more at Serviceberry Notary Public." />
      </Helmet>

      <main className="container mx-auto max-w-4xl px-4">

        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

        <p><strong>Notarization doesn't have to be confusing.</strong></p>
        <p className='pt-2'> We’ve answered common questions to help you better understand our services, what to expect during your appointment, and how to prepare. If you don’t see your question here, feel free to reach out — we’re happy to help.</p>

        <section className="max-w-4xl mx-auto pt-12">

          <div className="space-y-4">
            {faqs.map((service, index) => (
              <div key={service.id} id={service.id} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-center w-full text-left text-black font-medium text-lg"
                >
                  <span>{service.question}</span>
                  <span className="ml-4">
                    {activeIndex === index ? (
                      <FaMinus className="text-dark-green text-sm" />
                    ) : (
                      <FaPlus className="text-dark-green text-sm" />
                    )}
                  </span>
                </button>

                <div
                  className={`mt-3 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  {service.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
};

export default Questions;
