import ServiceberryLogo from "../assets/images/ServiceberryLogo2.png";
import Book from "./BookButton";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaCaretDown } from "react-icons/fa6";

const services = [
  { name: "Loan Documents", path: "/services#real-estate-loan-signings" },
  { name: "Power of Attorney", path: "/services#legal-personal-documents" },
  { name: "Real Estate Documents", path: "/services#real-estate-loan-signings" },
  { name: "Travel Documents", path: "/services#legal-personal-documents" },
  { name: "Last Will & Testament", path: "/services#legal-personal-documents" },
  { name: "And More", path: "/services" },
];

const questions = [
  // { name: "What is Remote Online Notarization?", path: "/questions#what-is-remote-online-notarization" },
  { name: "How do I prepare for my appointment?", path: "/questions#what-do-i-need-to-bring-to-the-notarization-appointment" },
  { name: "What forms of ID are acceptable?", path: "/questions#what-forms-of-identification-are-acceptable" },  
];

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [questionsOpen, setQuestionsOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto border-b border-gray-200">

      <div className="md:flex flex-col max-w-7xl mx-auto relative">
        <div className="hidden md:flex items-center justify-between w-full border-b border-gray-200 px-4">
          <nav className="flex items-center gap-8 text-lg font-medium tracking-wider py-4">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-dark-green transition-colors"
                onClick={() => navigate('/services')}
              >
                SERVICES <FaCaretDown className="text-sm" />
              </button>
              <div
                className={`${
                  servicesOpen ? "flex" : "hidden"
                } flex-col absolute top-full left-0 w-48 z-50 bg-white shadow-md`}
              >
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-sm hover:text-dark-green hover:bg-gray-50 p-2 hover:font-extrabold transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Questions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setQuestionsOpen(true)}
              onMouseLeave={() => setQuestionsOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-dark-green transition-colors"
                onClick={() => navigate('/questions')}
              >
                QUESTIONS <FaCaretDown className="text-sm" />
              </button>
              <div
                className={`${
                  questionsOpen ? "flex" : "hidden"
                } flex-col absolute top-full left-0 w-80 z-50 bg-white shadow-md`}
              >
                {questions.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm hover:text-dark-green hover:bg-gray-50 p-2 hover:font-extrabold transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {["ABOUT"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-dark-green transition-colors"
              >
                {item}
              </Link>
            ))}

          </nav>
          <Book />
        </div>

        <div className="flex items-center justify-center md:justify-start py-6 px-4">
          <img 
            src={ServiceberryLogo} 
            alt="Serviceberry Logo" 
            className="w-48 md:w-36 cursor-pointer" 
            onClick={() => navigate('/')}
          />
          <div className="ml-8 hidden md:block"> 
            <h1 className="text-3xl text-dark-green">Remote & Mobile Notary Services</h1>
            <p className="text-xl mt-4 text-muted italic">Certified. Flexible. Local to Seattle.</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4 top-4 text-3xl text-dark-green m-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        {mobileMenuOpen && (
          <nav className="flex flex-row justify-center items-center flex-wrap gap-4 text-lg font-medium tracking-wide border-t border-gray-200 pt-4 my-6 md:hidden">
            {["SERVICES", "QUESTIONS", "ABOUT"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-dark-green"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        )}

      </div>

    </header>
  );
};

export default Header;
