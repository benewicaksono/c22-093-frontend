import React from "react";
// import "./style.css";

function Home() {
  return (
    <div>
      <header className="header">
        <section className="flex">
          <a href="#home" className="logo">
            english for all
          </a>

          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#courses">courses</a>
            <a href="#teachers">teachers</a>
            <a href="#reviews">reviews</a>
            <a href="#contact">contact</a>
          </nav>

          <div id="menu-btn" className="fas fa-bars"></div>
        </section>
      </header>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>
              online <span>education</span>
            </h3>
            <a href="#contact" className="btn">
              contact us
            </a>
          </div>

          <div className="image">
            <img src="/images/homg-img.svg" alt="home-image" />
          </div>
        </div>
      </section>

      <section className="count">
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <div className="content">
              <h3>150+</h3>
              <p>courses</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div className="content">
              <h3>1300+</h3>
              <p>students</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-chalkboard-user"></i>
            <div className="content">
              <h3>80+</h3>
              <p>teachers</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-face-smile"></i>
            <div className="content">
              <h3>100%</h3>
              <p>satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="row">
          <div className="image">
            <img src="/images/about-img.svg" alt="about-image" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quibusdam magni error, aut enim rerum?
            </p>
            <a href="#contact" className="btn">
              contact us
            </a>
          </div>
        </div>
      </section>
      <section className="courses" id="courses">
        <h1 className="heading">
          our <span>courses</span>
        </h1>

        <div className="swiper course-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <img src="/images/course-1.svg" alt="" />
              <h3>English for Beginner</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, repellat!
              </p>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/course-2.svg" alt="" />
              <h3>Intermediate English</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, repellat!
              </p>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/course-3.svg" alt="" />
              <h3>Advence English </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, repellat!
              </p>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/course-4.svg" alt="" />
              <h3>Expert English</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, repellat!
              </p>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>

      <section className="teachers" id="teachers">
        <h1 className="heading">
          expert <span>tutors</span>
        </h1>

        <div className="swiper teachers-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <img src="/images/tutor-1.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
              <h3>john deo</h3>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/tutor-2.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
              <h3>john deo</h3>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/tutor-3.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
              <h3>john deo</h3>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/tutor-4.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
              <h3>john deo</h3>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/tutor-5.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
              <h3>john deo</h3>
            </div>

            <div className="swiper-slide slide">
              <img src="/images/tutor-6.png" alt="" />
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
              <h3>john deo</h3>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <h1 className="heading">
          {" "}
          student's <span>reviews</span>
        </h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                necessitatibus atque fuga delectus numquam consequatur velit
                autem distinctio possimus culpa!
              </p>
              <div className="user">
                <img src="/images/pic-1.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                necessitatibus atque fuga delectus numquam consequatur velit
                autem distinctio possimus culpa!
              </p>
              <div className="user">
                <img src="/images/pic-2.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                necessitatibus atque fuga delectus numquam consequatur velit
                autem distinctio possimus culpa!
              </p>
              <div className="user">
                <img src="/images/pic-3.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                necessitatibus atque fuga delectus numquam consequatur velit
                autem distinctio possimus culpa!
              </p>
              <div className="user">
                <img src="/images/pic-4.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                necessitatibus atque fuga delectus numquam consequatur velit
                autem distinctio possimus culpa!
              </p>
              <div className="user">
                <img src="/images/pic-5.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                necessitatibus atque fuga delectus numquam consequatur velit
                autem distinctio possimus culpa!
              </p>
              <div className="user">
                <img src="/images/pic-6.png" alt="" />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>

      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>

        <div class="row">
          <div class="image">
            <img src="/images/contact-img.svg" alt="" />
          </div>

          <form action="" method="post">
            <span>your name</span>
            <input
              type="text"
              required
              placeholder="enter your full name"
              maxlength="50"
              name="name"
              class="box"
            />
            <span>your email</span>
            <input
              type="email"
              required
              placeholder="enter your valie email"
              maxlength="50"
              name="email"
              class="box"
            />
            <span>your number</span>
            <input
              type="number"
              required
              placeholder="enter your valie number"
              max="9999999999"
              min="0"
              name="number"
              class="box"
              onkeypress="if(this.value.length == 10) return false;"
            />
            <span>select course</span>
            <select name="couses" class="box" required>
              <option value="" disabled selected>
                select the course --
              </option>
              <option value="English for Beginner">English for Beginner</option>
              <option value="Intermediate English">Intermediate English</option>
              <option value="Advance English">Advance English</option>
              <option value="Expert English">Expert English</option>
              <span>select gender</span>
              <div class="radio">
                <input type="radio" name="gender" value="male" id="male" />
                <label for="male">male</label>
                <input type="radio" name="gender" value="female" id="female" />
                <label for="female">female</label>
              </div>
            </select>
            <input type="submit" value="send message" class="btn" name="send" />
          </form>
        </div>
      </section>
    </div>
  );
}
export default Home;
