import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { PatternFormat } from 'react-number-format';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateForm = () => {
    const formEl = form.current;
    const firstName = (formEl?.elements.namedItem('firstName') as HTMLInputElement | null)?.value.trim() ?? '';
    const lastName = (formEl?.elements.namedItem('lastName') as HTMLInputElement | null)?.value.trim() ?? '';
    const email = (formEl?.elements.namedItem('email') as HTMLInputElement | null)?.value.trim() ?? '';
    const message = (formEl?.elements.namedItem('message') as HTMLTextAreaElement | null)?.value.trim() ?? '';
    const phoneDigits = phone.replace(/\D/g, '');
    const messageWords = message.split(/\s+/).filter(Boolean);

    const nameRegex = /^[A-Za-z]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      firstName: !nameRegex.test(firstName) ? 'first name must required' : '',
      lastName: !nameRegex.test(lastName) ? 'last name required' : '',
      email: !emailRegex.test(email) ? 'please enter a valid email address' : '',
      phone: phoneDigits.length < 10 ? 'please enter a valid phone number' : '',
      message: messageWords.length < 30 ? '' : '',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!/^[A-Za-z]{2,}$/.test(value.trim())) {
          error = `${name === 'firstName' ? 'first' : 'last'} name required`;
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'please enter a valid email address';
        }
        break;
      case 'message':
        const messageWords = value.trim().split(/\s+/).filter(Boolean);
        if (messageWords.length < 30) {
          error = 'please tell us more about your notary needs';
        }
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm(
        'service_2jdp7sr',
        'template_kmze0zr',
        form.current as HTMLFormElement,
        'KWvcwNWL44MfI-1Am'
      )
      .then(
        () => {
          form.current?.reset();
          setPhone('');
          setErrors({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
          toast.success('Thank you for your message, our team will be in touch shortly.', {
            icon: false,
            className: 'bg-dark-green text-white p-2 rounded-md shadow-md text-sm w-full sm:max-w-md font-lora',
            closeButton: false,
            hideProgressBar: true,
            autoClose: 3000,
          });
        },
        (error: { text: string }) => {
          console.error('There was an error sending the email:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact - Serviceberry Notary Public</title>
        <meta name="description" content="Learn more about us at serviceberrynotarypublic.com" />
        <link rel="canonical" href="https://serviceberrynotarypublic.com/about" />
        <meta property="og:title" content="About - Serviceberry Notary Public" />
        <meta property="og:description" content="Learn more at Serviceberry Notary Public." />
      </Helmet>
      <main className="container mx-auto max-w-4xl py-4 px-4" >
        <section className="max-w-7xl mx-auto" id="contact-us">
          <h2 className="text-xl font-medium pb-4">Contact Us</h2>
          <p className="text-l mb-4">We understand that notarizing documents can be a pivotal step in your personal or professional journey. Whether you're finalizing a real estate transaction, authenticating legal documents, or handling personal paperwork, we're here to guide you through the process with care and precision.</p>
          <p className="text-l mb-4">Please fill out the form below with your details and any specific requirements. Our dedicated team is committed to providing you with timely and reliable notarial services, ensuring your experience is seamless and stress-free.</p>
        </section>
        <section className="mt-12 mx-auto" id="contact-us">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium pb-2">First Name</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  name="firstName"
                  required
                  onBlur={handleBlur}
                />
                {errors.firstName && (
                  <p className="text-dark-pink text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium pb-2">Last Name</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  name="lastName"
                  required
                  onBlur={handleBlur}
                />
                {errors.lastName && (
                  <p className="text-dark-pink text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium pb-2">Email</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="email"
                  name="email"
                  required
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <p className="text-dark-pink text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium pb-2">Phone</label>
                <PatternFormat
                  className="w-full p-2 border border-gray-300 rounded-md"
                  format="(###) ###-####"
                  mask=" "
                  name="phone"
                  value={phone}
                  onValueChange={(values) => {
                    setPhone(values.formattedValue);
                    const phoneDigits = values.formattedValue.replace(/\D/g, '');
                    setErrors(prev => ({
                      ...prev,
                      phone: phoneDigits.length < 10 ? 'please enter a valid phone number' : '',
                    }));
                  }}
                  onBlur={() => {
                    const phoneDigits = phone.replace(/\D/g, '');
                    setErrors(prev => ({
                      ...prev,
                      phone: phoneDigits.length < 10 ? 'please enter a valid phone number' : '',
                    }));
                  }}
                  required
                />
                <input type="hidden" name="phone" value={phone} />
                {errors.phone && (
                  <p className="text-dark-pink text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium pb-2">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                name="message"
                required
                onBlur={handleBlur}
              />
              {errors.message && (
                <p className="text-dark-pink text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              className="mt-4 bg-dark-green text-white px-4 py-2 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </section>
        <ToastContainer position="bottom-center" autoClose={5000}/>
      </main>
    </>
  );
};

export default Contact;
