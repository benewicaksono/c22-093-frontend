import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Register() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pesan, setPesan] = useState('');
  const navigateTo = useNavigate();

  const doRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://c22-093-backend.vercel.app/api/userData/users/', {
        name: nama,
        email,
        password,
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Register Success',
          text: 'Please Login',
        });
      });
      navigateTo('/login');
    } catch (error) {
      setPesan(error.response.data.message);
    }
  };

  useEffect(() => {
    document.title = 'Register | C22';
  }, []);
  return (

    <section className="min-h-screen bg-primary">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="undraw_sharing_knowledge_03vp.svg"
              className="w-full"
              alt="Phone with login screen"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h3 className="text-center text-3xl text-slate-50 mb-3">Register Here</h3>
            <form onSubmit={doRegister}>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full Name"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {pesan && <p className="text-red-500">{pesan}</p>}
              </div>
              <div className="flex gap-2">

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-accent text-primary font-medium text-sm leading-snug uppercase rounded shadow-md hover:text-white hover:bg-secondary hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
