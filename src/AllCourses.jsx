import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AllCourses() {
  // get token from session storage
  const getTokenFromSession = () => {
    const token = sessionStorage.getItem('token');
    return token;
  };
  const navigateTo = useNavigate();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = getTokenFromSession();
    axios.get(`https://c22-093-backend.vercel.app/api/userData/session/${token}`)
      .then((res) => {
        if (res.data === 'null' || res.data === null) {
          navigateTo('/login');
        }
      }).then(() => {
        axios.get('https://c22-093-backend.vercel.app/api/material')
          .then((res) => setData(res.data.data))
          .then(() => setLoading(false));
      });
  }, []);

  const logoutHanlder = () => {
    sessionStorage.removeItem('token');
    navigateTo('/login');
  };
  return (
    // show blank while still loading
    <div className={`bg-primary text-slate-50 min-h-screen ${loading ? 'hidden' : 'block'}`}>
      <header className="sticky top-0 right-0 left-0 z-[1000] bg-[#4b4b4b] p-3 shadow">
        <nav className="w-full">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl items-center flex md:px-8">

            <div className="py-3 md:py-5">
              <a>
                <h2 className="text-2xl text-accent font-bold">English Courses</h2>
              </a>
            </div>

            <div
              className="pb-3 mt-8 block md:pb-0 md:mt-0"
            >
              <ul className=" space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
                <li className="text-secondary  bg-accent px-4 rounded py-3" onClick={logoutHanlder}>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>

            </div>

          </div>
        </nav>
      </header>
      <h1 className="text-3xl text-center py-3">All Courses</h1>
      <img src="public/undraw_online_learning_re_qw08.svg" alt="ilustraso belajar" className="w-1/2  mx-auto" />
      <div className="container px-6 pb-12 mx-auto">
        <div className="flex flex-1 flex-wrap gap-5 justify-center">

          <div role="status" className={loading ? 'block' : 'hidden'}>
            <svg className="inline mr-2 w-12 h-12 text-gray-200 animate-spin fill-accent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          {data && data.map((item) => (
            <div key={item.key} className="block p-6 rounded-lg shadow-lg bg-secondary max-w-sm">
              <h5 className="text-xl leading-tight font-medium mb-2">{item.name}</h5>
              <p className="text-slate-300 mb-4">
                Some quick example text to build on the card title and make up the bulk of the
                card&apos;s content.
              </p>
              <button type="button" className=" inline-block px-6 py-2.5 bg-accent text-secondary font-medium text-xs leading-tight uppercase rounded shadow-md  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                <Link to={`/courses/${item.key}`}> Detail </Link>
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default AllCourses;
