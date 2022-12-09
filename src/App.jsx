import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import StarRating from "./components/StarRating";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function App() {
  const TEACHERS = [
    {
      nama: "Bela",
      foto: "images/tutor-1.png",
    },
    {
      nama: "Budi Agus",
      foto: "images/tutor-2.png",
    },
    {
      nama: "AGus Tamvan",
      foto: "images/tutor-3.png",
    },
    {
      nama: "Jontor Udin",
      foto: "images/tutor-4.png",
    },
    {
      nama: "Udin Petot",
      foto: "images/tutor-5.png",
    },
    {
      nama: "Udin Aja",
      foto: "images/tutor-6.png",
    },
  ];

  const REVIEWS = [
    {
      nama: "Budi",
      foto: "images/pic-1.png",
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      bintang: 5,
    },
    {
      nama: "Budi",
      foto: "images/pic-1.png",
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      bintang: 5,
    },
    {
      nama: "Agus sitohang",
      foto: "images/pic-2.png",
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      bintang: 4,
    },
    {
      nama: "Goro sigundul",
      foto: "images/pic-3.png",
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      bintang: 4,
    },
    {
      nama: "Aku Budi",
      foto: "images/pic-4.png",
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      bintang: 4,
    },
    {
      nama: "Bapak Budi",
      foto: "images/pic-5.png",
      review:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      bintang: 5,
    },
  ];
  return (
    <div className=" bg-primary w-screen">
      <div className="max-w-7xl mx-auto py-4 ">
        <header className="fixed top-0 right-0 left-0 z-[1000] bg-[#4b4b4b] p-3">
          <section className="max-w-7xl flex items-center justify-between relative mx-auto">
            <a href="#home" className="text-4xl text-white capitalize ">
              english for all
            </a>

            <nav className="ml-8 text-3xl text-[#aaa] ">
              <a className="hover:text-accent px-2 " href="#home">
                Home
              </a>
              <a className="hover:text-accent px-2" href="#about">
                About
              </a>
              <a className="hover:text-accent px-2 " href="#courses">
                Courses
              </a>
              <a className="hover:text-accent px-2" href="#teachers">
                Teachers
              </a>
              <a className="hover:text-accent px-2" href="#reviews">
                Reviews
              </a>
              <a className="hover:text-accent px-2" href="#contact">
                Contact
              </a>
            </nav>

            <div id="menu-btn" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 fill-white stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </section>
        </header>
        {/* section home */}
        <section className="home" id="home">
          <div className="flex">
            <div className="text-center m-auto w-1/2 capitalize">
              <h3 className="text-9xl text-white my-5">
                online <br /> <span className="text-[#00E77F]">education</span>
              </h3>
              <a
                href="#contact"
                className="px-5 py-2 my-3 bg-[#4b4b4b] rounded-full text-white hover:bg-accent"
              >
                contact us
              </a>
            </div>

            <div className="w-1/2">
              <img src="/images/homg-img.svg" alt="home-image" />
            </div>
          </div>
        </section>

        {/* section informasi */}
        <section className="">
          <div className="grid grid-cols-auto-fit gap-6 items-start">
            <div className="bg-[#4b4b4b] rounded-lg flex p-8 justify-center items-center gap-8">
              <i className="fas fa-graduation-cap"></i>
              <div className="content">
                <h3 className="text-white text-3xl mb-2">150+</h3>
                <p className="text-2xl text-[#aaa]">courses</p>
              </div>
            </div>

            <div className="bg-[#4b4b4b] rounded-lg flex p-8 justify-center items-center gap-8">
              <i className="fas fa-user-graduate"></i>
              <div className="content">
                <h3 className="text-white text-3xl mb-2">1300+</h3>
                <p className="text-2xl text-[#aaa]">students</p>
              </div>
            </div>

            <div className="bg-[#4b4b4b] rounded-lg flex p-8 justify-center items-center gap-8">
              <i className="fas fa-chalkboard-user"></i>
              <div className="content">
                <h3 className="text-white text-3xl mb-2">80+</h3>
                <p className="text-2xl text-[#aaa]">teachers</p>
              </div>
            </div>

            <div className="bg-[#4b4b4b] rounded-lg flex p-8 justify-center items-center gap-8">
              <i className="fas fa-face-smile"></i>
              <div className="content">
                <h3 className="text-white text-3xl mb-2">100%</h3>
                <p className="text-2xl text-[#aaa]">satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* section about */}
        <section className="about" id="about">
          <div className="flex">
            <div className="w-1/2">
              <img src="/images/about-img.svg" alt="about-image" />
            </div>

            <div className="w-1/2 text-center m-auto">
              <div className="max-w-md text-white">
                <h3 className="text-4xl">why choose us?</h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quibusdam magni error, aut enim rerum?
                </p>
                <a
                  href="#contact"
                  className="px-5 py-2 bg-[#4b4b4b] rounded-full text-white"
                >
                  contact us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* section our courses */}
        <section className="courses" id="courses">
          <h1 className="text-6xl text-center text-white uppercase">
            our <span className="text-[#00E77F]">courses</span>
          </h1>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {/* custom arrow color swiper */}
            <style jsx global>
              {`
                .swiper-button-prev,
                .swiper-button-next {
                  color: #00e77f;
                }
                .swiper-pagination-bullet-active {
                  background: #00e77f;
                }
              `}
            </style>
            <SwiperSlide>
              <div className="swiper-slide slide text-center p-8 mb-2 text-white ">
                <img
                  className="h-96 mx-auto"
                  src="/images/course-1.svg"
                  alt=""
                />
                <h3>English for Beginner</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, repellat!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide text-center p-8 mb-2 text-white ">
                <img
                  className="h-96 mx-auto"
                  src="/images/course-1.svg"
                  alt=""
                />
                <h3>English for Beginner</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, repellat!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide text-center p-8 mb-2 text-white ">
                <img
                  className="h-96 mx-auto"
                  src="/images/course-1.svg"
                  alt=""
                />
                <h3>English for Beginner</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, repellat!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide text-center p-8 mb-2 text-white ">
                <img
                  className="h-96 mx-auto"
                  src="/images/course-1.svg"
                  alt=""
                />
                <h3>English for Beginner</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, repellat!
                </p>
              </div>
            </SwiperSlide>

            <div className="swiper-pagination"></div>
          </Swiper>
        </section>

        {/* section teacher */}
        <section id="teachers">
          <h1 className="text-6xl text-center text-white uppercase">
            Expert <span>Tutors</span>
          </h1>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
          >
            {TEACHERS.map((teacher) => (
              <SwiperSlide key={teacher.id}>
                <div className="flex flex-col select-none">
                  <div className="bg-cover">
                    <img src={teacher.foto} alt={"foto " + teacher.nama} />
                  </div>
                  <h3 className="text-slate-50 text-lg text-center">
                    {teacher.nama}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* section review */}
        <section className="review" id="review">
          <h1 class="text-6xl text-center text-white uppercase">
            student's <span className="text-accent">reviews</span>
          </h1>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            className="mt-2"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id}>
                <div class="flex text-slate-50 flex-col max-w-md bg-secondary rounded p-4">
                  <p>{review.review}</p>
                  <div class="flex py-5">
                    <div className="overflow-hidden mr-2">
                      <img
                        className="rounded-full w-20"
                        src={review.foto}
                        alt={"foto " + review.nama}
                      />
                    </div>
                    <div class="flex flex-col align-middle my-auto text-xl">
                      <h3 className="">{review.nama}</h3>
                      <StarRating totalStars={review.bintang} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* end section reviews */}

        {/* <!-- footer section starts  --> */}

        <footer className="footer bg-secondary flex flex-col mt-5 py-5">
          <div className="share flex justify-center text-3xl gap-4">
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <FaFacebookF />
            </div>
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <FaTwitter />
            </div>
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <FaInstagram />
            </div>
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <FaLinkedin />
            </div>
            <div className="text-white rounded-full bg-primary hover:bg-accent p-3">
              <FaYoutube />
            </div>
          </div>

          <div className="credit mt-3 text-center text-slate-50">
            &copy; copyright @ 2022 by{" "}
            <span className="text-accent">Dicoding Team</span> | all rights
            reserved!
          </div>
        </footer>

        {/* <!-- footer section ends --> */}
      </div>
    </div>
  );
}

export default App;
