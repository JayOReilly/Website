import Head from "next/head";
import dynamic from "next/dynamic";
import ScrollToTop from "react-scroll-to-top";
import { useRef } from "react";
import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { SiLinkedin } from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { DiJsBadge } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { SiTailwindcss, SiCsswizardry } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import dubpic from "../images/dublin.jpg";
import me from "../images/jorlogo.png";
import pic from "../images/pic.jpg";
import pro from "../images/projectlogo.png";
import about from "../images/about.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import JavaScript from "../images/js.png";
import { GiHighKick } from "react-icons/gi";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // to avoid ssr error
 

  const slides = [
    {
      url: "https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png",
    },

    {
      url: "https://res.cloudinary.com/practicaldev/image/fetch/s--y2fF9U3x--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x8vfaqfibaay30pubk73.jpeg",
    },
    {
      url: "https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
    },
    {
      url: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
    },

    {
      url: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1024px-Nextjs-logo.svg.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Head>
        <title>James O'Reilly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://tarptaeya.github.io/repo-card/repo-card.js" />

      </Head>
      <main className="bg-white px-0 ">
        <section className=" min-h-screen   ">
          <nav
            className="py-2 px-6 bg-gradient-to-r from-slate-700 to-black  flex justify-between leading-7 
          border border-black border-t-0 border-l-0 border-r-0 border-b-1 
          "
          >
            <ul className=" p-3 font-ShareTekMono text-gray-400 text-2xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("James O'Reilly | Front End Developer")

                    .callFunction(() => {
                      console.log("String typed out!");
                    })

                    .pauseFor(9999)
                    

                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </ul>

            <ul className="flex items-center  gap-8">
              <li className="bg-black rounded-lg">
                <div class="max-w-7xl mx-auto">
                  <div class="relative group border rounded-lg">
                    <div class="absolute  -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg cursor-pointer blur opacity-10 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                    <div class="relative  w-23 px-10 py-4 bg-black ring-1 cursor-pointer ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6">
                      <h1 className="text-white text-2xl group-hover:text-purple-200 transition cursor-pointer duration-300">
                        <a href="https://www.linkedin.com/in/james-jamie-o-reilly-6b9a45207/">
                          <CiLinkedin />
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-black rounded-lg">
                <div class="max-w-7xl mx-auto">
                  <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative  w-23 px-10 py-4 border bg-black ring-1 cursor-pointer ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6">
                      <h1 className="text-white text-2xl group-hover:text-purple-200 transition cursor-pointer duration-300 ">
                        <a href="https://github.com/JayOReilly">
                          <FiGithub />
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          {/*---------------------End of Nav Bar---------------------------*/}

          {/*---------------------End Of Portofolio Section---------------------------*/}

          <div
            className="text-center  mt-0 

          
          
          
          bg-black h-full resize-y rounded-md "
            id="about"
          >
            <div className=" bg-gray-300">
              {" "}
              <Image
                alt="ME"
                src={dubpic}
                className="w-full h-64 blur-lg saturate-200 contrast-200
            hue-rotate-30 brightness-100
            "
              ></Image>
              <div
                className=" w-full   text-white border-lg border-white 
                border-t-0 border-l-0 border-r-0 border-b-0 rounded-lg
                 
                 grid place-items-center
                py-2
                -translate-y-1/4
                 
                 
                 "
              >
                <div
                  className="pattern-cross pattern-slate-700
                
                pattern-bg-white 
                pattern-size-8 pattern-opacity-100 
                
                
                h-full w-2/4 rounded-md drop-shadow-2xl outline-solid border-4 border-gray-500"
                >
                  <div className="flex justify-center items-center leading-none">
                    <Image
                      alt="ME"
                      src={pic}
                      className="h-56 w-56 rounded-md shadow-2xl mt-6 transform
                    -translate-y-10 border-4 border-gray-500
                    hover:-translate-y-4 transition duration-700"
                    ></Image>
                  </div>
                  <div className="p-3 bg-slate-700">
                    <h1 className="text-xl text-white font-ShareTekMono">About Me</h1>
                    <p className="block mb-1 font-bold font-ClimateCrisis  text-left text-white">
                      My name is James O'Reilly and I have recently completed a
                      Bsc in Computer Science. I am now searching for a position
                      in Front End developement & Ux Design. In my spare time I
                      enjoy going to the Gym, Kickboxing, Football.
                    </p>
                    <br />
                    <p className="block mb-1 font-ClimateCrisis font-bold text-left text-white">
                      I have been undertaking projects to keep my skills
                      sharpend. In 2023 i plan to self learn design using Figma
                      and best practices for product design Since finishing my
                      degree I have worked a period in IT Support and then spent
                      some time In South Africa Travelling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------End Of Container---------------------------*/}

          {/*---------------------STart of Skills Container---------------------------*/}
          <div
            className="bg-gradient-to-r from-slate-700 to-black py-8  w-full  m-auto  
            
           
            
            text-gray-300 text-center  "
          >
            <h1 className="mb-4 text-3xl font-ShareTekMono  ">
              Github Display
            </h1>

            <div className="grid grid-cols-3 text-xl ">
              <div className=" ml-2 items-center   mb-4 justify-center">
                <div
                  class="repo-card"
                  data-repo="JayOReilly/Portofolio"
                  data-theme="dark-theme"
                ></div>
              </div>
              <div className="ml-4 items-center  justify-center">
                <div
                  className="repo-card"
                  data-repo="JayOReilly/StudentHousingApp"
                  data-theme="dark-theme"
                ></div>
              </div>
              <div className="ml-4 mr-4 items-center  justify-center">
                <div
                  className="repo-card"
                  data-repo="JayOReilly/JenkinsTest"
                  data-theme="dark-theme"
                ></div>
              </div>
              <div className=" ml-2 items-center justify-center">
                <div
                  className="repo-card"
                  data-repo="JayOReilly/Space-three.js"
                  data-theme="dark-theme"
                ></div>
              </div>
              <div className=" ml-4  items-center  justify-center">
                <div
                  className="repo-card"
                  data-repo="JayOReilly/Parralax---React-Spring"
                  data-theme="dark-theme"
                ></div>
              </div>
              <div className=" ml-4 mr-4 items-center  justify-center">
                <div
                  className="repo-card"
                  data-repo="JayOReilly/BookClub"
                  data-theme="dark-theme"
                ></div>
              </div>
            </div>
          </div>

          {/*---------------------Start of Container with Icons---------------------------*/}

          {/*---------------------End of Container with Icons---------------------------*/}

          {/*---------------------Start of Bottom Container ---------------------------*/}

          <div className="text-center">
            <h1 className="text-3xl text-slate-700 mt-8 font-ShareTekMono">Skills</h1>
          </div>

          <div className="  max-w-auto h-96  m-auto py-16 px-4 relative group">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full 
              rounded-2xl bg-center bg-contain bg-no-repeat duration-500 "
            ></div>
            {/*Left Arrow */}
            <div
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
            left-5 text 2xl rounded-full p-2 bg-black/20
            text-white cursor-pointer
            "
            >
              <BsChevronLeft onClick={prevSlide} size={30} />
            </div>
            {/*Right Arrow */}
            <div
              className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
            right-5 text 2xl rounded-full p-2 bg-black/20
            text-white cursor-pointer
            "
            >
              <BsChevronRight onClick={nextSlide} size={30} />
            </div>
          </div>
          {/*---------------------End of Bottom Container ---------------------------*/}

          {/*---------------------Start of Footer---------------------------*/}

          <div
            className="text-center bg-gradient-to-r from-slate-700 to-black h-auto p-20
            text-white mt-0 flex-row
          
          "
          >
            <div class="py-8 lg:py-16 px-4 mx-auto w-screen-lg">
              <h2 class="mb-4 text-4xl tracking-tight font-ShareTekMono text-center text-white dark:text-white">
                Contact Me
              </h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
              <form
                method="POST"
                action="https://getform.io/f/16584e33-abc8-4ace-8700-58a2d3bd66c6"
                class="space-y-8"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border text-black border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Name..."
                    required
                  />
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-white dark:text-gray-400"
                  >
                    Your message
                  </label>

                  <textarea
                    type="text"
                    name="Message"
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="py-3 px-5 border-2 border-white hover:text-gray-900 hover:bg-white text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>

          <footer
            class="w-full h-20 bg-gradient-to-r from-slate-700 to-black border-t-2 border-white
            abosolute left-0 bottom-0 
            flex-rows-3 text-center   
            text-white 
            "
          >
            <div>
              <h1 className="text-sm">
                Copyright © James O'Reilly, 2023, All rights reserved.
              </h1>
            </div>

            <div>
              <h1 className="text-sm">
                Built Using React.Js, Next.Js, Tailwind Css
              </h1>
              <div className="items-center">
               <ScrollToTop  smooth width="" className="" color="#6f00ff"/>
               </div>
            </div>
          </footer>
          {/*---------------------End Of Footer---------------------------*/}
        </section>
        {/*---------------------End Of Page---------------------------*/}
      </main>
    </>
  );
}
