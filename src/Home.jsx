/* eslint-disable react/react-in-jsx-scope */
import { Link as LinkScroll } from 'react-scroll';

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Home() {
  const [data, setData] = useState([]);
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    document.title = 'Home | English Courses';
    const requestMaterial = axios.get('https://c22-093-backend.vercel.app/api/material');
    const requestUser = axios.get('https://c22-093-backend.vercel.app/api/userData/users');
    axios.all([requestMaterial, requestUser]).then(axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      // use/access the results
      setData(responseOne.data.data);
      setUser(responseTwo.data);
    }));
  }, []);

  const kontakFormSubmit = async (e) => {
    e.preventDefault();
    const dataKontak = {
      subject: e.target.subject.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyf1TH1jFJbt2LziHBVC9b99Z1KVKVFclVPY-o8fHIRczE16MKIqjj-7djiLwaUSDKI/exec', {
        method: 'POST',
        body: JSON.stringify(dataKontak),
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Message sent successfully',
        });
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className=" bg-primary ">
      <div className="max-w-7xl mx-auto ">
        {/* navigation */}
        <header className="sticky top-0 right-0 left-0 z-[1000] bg-[#4b4b4b] p-3 shadow">
          <nav className="w-full">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">

                  <h2 className="text-2xl text-accent font-bold">English Courses</h2>

                  <div className="md:hidden">
                    <button
                      className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? 'block' : 'hidden'
                  }`}
                >
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
                    <li className="text-white hover:text-slate-400">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="text-white hover:text-slate-400">
                      <LinkScroll to="contact-us" smooth duration={1000}>
                        Contact Us
                      </LinkScroll>
                    </li>
                    <li className="text-secondary  bg-accent px-4 rounded py-3">
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* section home */}
        <section className="home px-5" id="home">
          <div className="flex flex-col lg:flex-row">
            <div className="text-center m-auto w-1/2 capitalize">
              <h3 className="text-6xl lg:text-9xl  text-white my-5">
                online
                {' '}
                <br />
                {' '}
                <span className="text-[#00E77F]">education</span>
              </h3>
            </div>

            <div className="w-1/2 mx-auto ">
              <img src="/images/homg-img.svg" alt="home" />
            </div>
          </div>
        </section>

        {/* section informasi */}
        <section className="px-5">
          <div className="grid grid-cols-auto-fit gap-6 items-start">
            <div className="bg-[#4b4b4b] rounded-lg flex p-8 justify-evenly gap-8">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 mx-auto stroke-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="content">
                <h3 className="text-white text-3xl mb-2">{data.length}</h3>
                <p className="text-2xl text-[#aaa]">courses</p>
              </div>
            </div>
            <div className="bg-[#4b4b4b] rounded-lg flex p-8 justify-evenly gap-8">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 stroke-accent mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

              </div>
              <div className="content">
                <h3 className="text-white text-3xl mb-2">{user.length}</h3>
                <p className="text-2xl text-[#aaa]">students</p>
              </div>
            </div>
          </div>
        </section>

        {/* section about */}
        <section className="about p-4" id="about">
          <div className="flex flex-col lg:flex-row">
            <div className="w-1/2 mx-auto">
              <img src="/images/about-img.svg" alt="about" />
            </div>

            <div className="w-1/2 text-center m-auto">
              <div className="max-w-md text-white">
                <h3 className="text-4xl capitalize">why choose us?</h3>
                <p className="mb-6">
                  easy to understand and learn with
                  structed learning from
                  beginner to expert
                </p>
                <div
                  className="px-5 py-4 text-xl capitalize bg-[#4b4b4b] rounded-full text-white hover:bg-accent "
                >
                  <LinkScroll to="contact-us" smooth duration={1000}>
                    Contact Us
                  </LinkScroll>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section our courses */}
        <section className="courses p-4" id="courses">
          <h1 className="text-6xl text-center text-white uppercase">
            our
            {' '}
            <span className="text-[#00E77F]">courses</span>
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row gap-5">
              {data && data.slice(0, 3).map((item) => (
                <div key={item.key} className="text-center p-8 mb-2 text-white rounded overflow-hidden bg-secondary">
                  <img src={item.imgUrl} alt={item.name} className=" mx-auto overflow-hidden" />
                  <h2 className="text-xl py-4">{item.name}</h2>
                </div>
              ))}
            </div>

            <div className="text-center mt-3 ">

              <Link className="px-3 py-2 text-center bg-accent rounded mx-auto" to="/courses">See All Courses</Link>

            </div>
          </div>
        </section>

        {/* section contact us */}

        <section className="my-3 px-4" id="contact-us">
          <h1 className="text-6xl text-slate-50 text-center uppercase">
            Contact
            {' '}
            <span className="text-accent">Us</span>
          </h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-1/2 mx-auto">
              <form onSubmit={kontakFormSubmit} className="space-y-8">
                <div>
                  <label htmlFor="email" className="block mb-2 text-md font-medium text-slate-50">
                    Your email
                    <input name="email" type="email" id="email" className="shadow-sm bg-secondary border border-gray-300 text-slate-50 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
                  </label>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-md font-medium text-slate-50">
                    Subject
                    <input name="subject" type="text" id="subject" className="block p-3 w-full text-md text-slate-50 bg-secondary rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-md font-medium text-slate-100">
                    Your message
                    <textarea name="message" id="message" rows="6" className="block p-2.5 w-full text-md text-slate-50 bg-secondary rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
                  </label>
                </div>
                <button type="submit" className="py-3 px-5 text-md font-medium text-center text-primary rounded-lg bg-accent sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
              </form>
            </div>
            <div className="w-1/2 p-7 m-auto">
              <img src="undraw_contact_us_re_4qqt.svg" alt="contact us" />
            </div>

          </div>
        </section>

        {/* end section contact us */}

        {/* <!-- footer section starts  --> */}

        <footer className="footer bg-secondary flex flex-col mt-5 py-5">
          <div className="share flex justify-center text-3xl gap-4">
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <a href='https://www.instagram.com/dwinabelaa_' target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <a href='https://www.linkedin.com/in/dwinabela/' target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <a href='https://github.com/dwinabelaa' target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="credit mt-3 text-center text-slate-50">
            &copy; copyright @ 2022 by
            {' '}
            <span className="text-accent">Dicoding Team</span>
            {' '}
            | all rights
            reserved!
          </div>
        </footer>

        {/* <!-- footer section ends --> */}
      </div>
    </div>
  );
}

export default Home;
