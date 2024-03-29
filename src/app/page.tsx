// import Image from "next/image";
'use client';

import Image from 'next/image';
import Script from "next/script";
import TypingAnimation from "@/components/TypeAnimation/TypeAnimation";

// import { useEffect, useState } from "react";

export default function Home() {
  // const [isClient, setIsClient] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsClient(true);
  // },[]);


  return (
    <>
      <div className="main-container">
        <div className="nav" id="nav">
          <Image 
            src={"/logo.png"}
            alt={"Logo"}
            width={60}
            height={50}
          />
          <section>
            <p className="project" id="project">
              Project&lsquo;s
            </p>
            <p className="Contact" id="contact">
              Contact Me
            </p>
          </section>
        </div>
        <div className="card-blur" id="firstPage">
          <div className="contectme"></div>

          {/* <!-- ***************** -->
        <!-- --FIRST SECTION-- -->
        <!-- ***************** --> */}

          <section className="firstSection hide" id="firstSection">
            <div className="leftSection">
              <h1>Hi,</h1>
              My name is <span className="purple">Methuseli Meckson Mfema</span>
              <div>and I am a passionate</div>
              {/* <!-- Element to contain animated typing --> */}
              {/* <span id="element"></span> */}
              <TypingAnimation strings={["Web Developer", "Software Engineer", "Electronic Engineer", "Full Stack Developer"]} />
              <div className="botton">
                <button className="btn" id="downloadBtn">
                  Download Resume
                </button>
                <p id="message">Resume not available</p>
              </div>
            </div>
            <div className="rightSection">
              <Image
                src={"/code.png"}
                alt={"code"}
                width={500}
                height={700}
                />
            </div>
          </section>

          <hr />

          {/* <!-- ***************** -->
        <!-- --SECOND SECTION-- -->
        <!-- ***************** --> */}
          <section className="secondSection hide" id="secondSection">
            {/* <!-- <h3>Intro</h3> --> */}
            <p>
              <span className="hi">Hi,</span> I&lsquo;m Methuseli Meckson Mfema. This is my portfolio website
              where I showcase my software development{" "}
              <span className="p">projects</span>. Currently, I am actively
              involved in software development, and I have gained expertise in
              several programming languages.
              <br />
              If you need any assistance with software development or have any
              software-related projects in mind, feel free to get in touch with me. I
              would be more than happy to help.
              <br />
              My software development expertise includes IoT development, Web development, Mobile App development, and firmware/micro-controller programming. 
              <br />
              I enjoy programming in Java, Python, JavaSript, Golang, Dart, C and C++. I am thus well-versed in the frameworks associated with the programming languages.
              <br />
              I am also skilled with  databases like MongoDB, MySQL and PostrgreSQL <br />
              Lately I have been investing my time in improving my cloud skills. Although I am familiar with cloud infrastructure I am more drawn to frontend and backend development.<br />
              Thank you for providing this opportunity. If you are interested in
              collaborating with me, please don&lsquo;t hesitate to reach out.
            </p>

            {/* <!-- *****************  -->
          <!-- *||PROGRESS BAR||*  -->
          <!-- *****************  --> */}

            {/* <div className="BAR">
            <h3 className="headinga">Some of my knowledge</h3>
            <div className="progress-body" id="progressBody">
              <div className="progress-bar-container">
                <div className="progress-bar html">
                  <progress id="html" min="0" max="100" value="60"></progress>
                </div>
                <h2 className="pro-text">
                  <label for="html">HTML</label>
                </h2>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar css">
                  <progress id="css" min="0" max="100" value="50"></progress>
                </div>
                <h2 className="pro-text">
                  <label for="css">CSS</label>
                </h2>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar js">
                  <progress id="js" min="0" max="100" value="30"></progress>
                </div>
                <h2 className="pro-text">
                  <label for="js">JavaScript</label>
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar react">
                  <progress id="React" min="0" max="100" value="5"></progress>
                </div>
                <h2 className="pro-text">
                  <label for="React">React Js</label>
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar node">
                  <progress id="Node" min="0" max="100" value="0"></progress>
                </div>
                <h2 className="pro-text">
                  <label for="node">Node Js</label>
                </h2>
              </div>
            </div>
          </div> */}
          </section>

          {/* <!-- ***************** -->
        <!-- ==PHOTO'S SECTION== -->
        <!-- --THIRD SECTION-- -->
        <!-- ***************** --> */}

          <hr className="hr hide" />
          <h2 className="photosheading hide">My Photos Collection</h2>
          <section className="thirdSection hide" id="thirdSection">
            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="mela">
                    <div className="img-bg"></div>
                    <img src="img/mela.webp" alt="mela" />
                  </figure>

                  <ul>
                    <li>&ldquo;Band Of Colors✨&ldquo;</li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  <figure className="mela blur">
                    <div className="img-bg"></div>
                    <img src="img/mela.webp" alt="img" />
                  </figure>

                  <button
                    className="visit-button photos-one"
                    data-instagram-link="https://www.instagram.com/p/CiHfIcXJM4b/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                  >
                    Visit
                  </button>

                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /flip-card-container --> */}

            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="nature">
                    <div className="img-bg"></div>
                    <img src="img/nature1.webp" alt="Img" />
                  </figure>
                  <ul>
                    <li>
                      &ldquo; Sailing Through the Celestial River Aboard the
                      Majestic Moon Ship🌙✨&ldquo;
                    </li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  <figure className="nature blur">
                    <div className="img-bg"></div>
                    <img src="img/nature1.webp" alt="img" />
                  </figure>

                  <button
                    className="visit-button"
                    id="photo-two"
                    data-instagram-link="https://www.instagram.com/p/CjxQYHapBWQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                  >
                    Visit
                  </button>

                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /flip-card-container --> */}

            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="moon">
                    <div className="img-bg"></div>
                    <img src="img/moon.webp" alt="img" />
                  </figure>

                  <ul>
                    <li>
                      &ldquo; The moon is the perfect reminder that even in the
                      darkness, there&lsquo;s always a light shining.&ldquo;
                    </li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  {/* <!-- only if the image is necessary --> */}
                  <figure className="moon blur">
                    <div className="img-bg"></div>
                    <img src="img/moon.webp" alt="img" />
                  </figure>

                  <button
                    className="visit-button"
                    id="photo-three"
                    data-instagram-link="https://www.instagram.com/p/CqLXXxHJOwQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                  >
                    Visit
                  </button>

                  {/* <!-- can add svg here and remove these eight spans --> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="road">
                    <div className="img-bg"></div>
                    <img src="img/road.webp" alt="img" />
                  </figure>

                  <ul>
                    <li>
                      &ldquo;Do not fear. The rain is only here to help you
                      grow🌱&ldquo;
                    </li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  {/* <!-- only if the image is necessary --> */}
                  <figure className="road blur">
                    <div className="img-bg"></div>
                    <img src="img/road.webp" alt="img" />
                  </figure>

                  <button
                    className="visit-button"
                    id="photo-four"
                    data-instagram-link="https://www.instagram.com/p/CeD-4bVsJRh/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                  >
                    Visit
                  </button>

                  {/* <!-- can add svg here and remove these eight spans --> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="sunrise">
                    <div className="img-bg"></div>
                    <img src="img/sunrise.webp" alt="img" />
                  </figure>

                  <ul>
                    <li>
                      &ldquo;Embracing the dawn of a new day, as the sun paints
                      the sky with hues of hopes and possibility.🌅✨&ldquo
                    </li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  {/* <!-- only if the image is necessary --> */}
                  <figure className="sunrise blur">
                    <div className="img-bg"></div>
                    <img src="img/sunrise.webp" alt="img" />
                  </figure>

                  <button
                    className="visit-button"
                    id="photo-five"
                    data-instagram-link="https://www.instagram.com/p/Cj7trTzJUCW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                  >
                    Visit
                  </button>

                  {/* <!-- can add svg here and remove these eight spans --> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="flower">
                    <div className="img-bg"></div>
                    <img src="img/flower.jpg" alt="img" />
                  </figure>

                  <ul>
                    <li>
                      &ldquo;Nurtured by nature&lsquo;s hand, a purple bloom
                      whispers elegance and grace in every petal.💜🌸&ldquo;
                    </li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  {/* <!-- only if the image is necessary --> */}
                  <figure className="flower blur">
                    <div className="img-bg"></div>
                    <img src="img/flower.jpg" alt="img" />
                  </figure>

                  <button
                    className="visit-button"
                    id="photo-six"
                    data-instagram-link="https://www.instagram.com/p/BrcaGe_BblD/?utm_source=ig_web_copy_link"
                  >
                    Visit
                  </button>

                  {/* <!-- can add svg here and remove these eight spans --> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /flip-card-container --> */}

            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="coin">
                    <div className="img-bg"></div>
                    <img src="img/indian coin.jpg" alt="img" />
                  </figure>

                  <ul>
                    <li>
                      &ldquo;Before money, there&lsquo;s nothing in front of a
                      person. Because true values and the best aspects of
                      humanity cannot be measured by currency.💴💲&ldquo;
                    </li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  {/* <!-- only if the image is necessary --> */}
                  <figure className="coin blur">
                    <div className="img-bg"></div>
                    <img src="img/indian coin.jpg" alt="img" />
                  </figure>

                  <button
                    className="visit-button"
                    id="photo-seven"
                    data-instagram-link="https://www.instagram.com/p/COxZiKupmrb/?utm_source=ig_web_copy_link"
                  >
                    Visit
                  </button>

                  {/* <!-- can add svg here and remove these eight spans --> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /flip-card-container --> */}

            {/* <!-- flip-card-container --> */}
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="card-front">
                  <figure className="">
                    <div className="img-bg"></div>
                    <img src="img/mall.webp" alt="img" />
                  </figure>

                  <ul>
                    <li>&ldquo;Sky above, possibilities within.👍&ldquo;</li>
                  </ul>
                  <p className="insta-link">
                    <span>_photoz.x._</span>
                  </p>
                </div>

                <div className="card-back">
                  {/* <!-- only if the image is necessary --> */}
                  <figure className="blur">
                    <div className="img-bg"></div>
                    <img src="img/mall.webp" alt="img" />
                  </figure>

                  <button
                    className="visit-button"
                    id="photo-eight"
                    data-instagram-link="https://www.instagram.com/p/Crk_Om2pggT/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                  >
                    Visit
                  </button>

                  {/* <!-- can add svg here and remove these eight spans --> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /flip-card-container --> */}
          </section>
          <p className="insta hide">
            If you want to see more photos or get photos edited, please send a
            message on Instagram.
            <a href="https://www.instagram.com/_photoz.x._/" target="_blank">
              <i className="fa-brands fa-instagram fa-2xl"></i> _photoz.x._
            </a>
          </p>
        </div>

        {/* <!-- ====== My-Project[Section's] ====== --> */}

        <div className="myallproject" id="myprojects">
          <header className="project-header">
            <h1>My Projects</h1>
            <div id="back" className="back-button">
              <i
                className="fa-solid fa-arrow-left fa-fade"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </header>
          <main id="projects-container"></main>
        </div>

        <div className="footer hide">
          <span className="text1">By ::</span>
          <span className="text2"> Methuseli Meckson Mfema</span>
        </div>
      </div>
      <Script src="/script.js" />
      {/* <Script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js" />
      {isClient ? <script>
        {`let typed = new Typed("#element", {
        strings: ["Web Developer", "UI & UX Designer", "Photographer", "Photo And Video Editor"],
        typeSpeed: 50,
      });`}
      </script> : null} */}
    </>
  );
}
