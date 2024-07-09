import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import profile from './images/profile.jpg'
import g5 from './images/g5.png';
import g1 from './images/g1.png';
import g3 from './images/g3.png';
import Projects from './Projects.jsx';

function App() {
  return (
    <Router>
      <>
        {/* Start Header */}
        <header className="p-4 dark:bg-black dark:text-white">
          <div className="container flex justify-between h-16 mx-auto">
            <li className="flex">
              <Link to="/" className="flex items-center px-4 -mb-1 text-lg font-bold">My Portfolio</Link>
            </li>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <a href="/" className="flex items-center px-4 -mb-1">Home</a>
              </li>
              <li className="flex">
                <a href="#About" className="flex items-center px-4 -mb-1">About Us</a>
              </li>
              <li className="flex">
                <a href="#Contact" className="flex items-center px-4 -mb-1">Contact Us</a>
              </li>
            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <a href="#Project" className="self-center px-8 py-3 font-semibold rounded dark:bg-white dark:text-black">Projects</a>
            </div>
            <button className="p-4 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </header>
        {/* End Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </>
    </Router>
  );
}

const Home = () => (
  <>
    {/* Start About */}
    <section id='About' className="py-6 bg-black text-gray-800">
  <div className="container flex flex-col items-center mt-14 justify-center p-4 mx-auto sm:p-10 w-full">
    <div className="flex flex-row flex-wrap-reverse justify-center mt-8 w-full">
      <div className="flex flex-col justify-center w-full px-8 py-5 mt-14 text-center rounded-md bg-white text-gray-500 max-w-3xl">
        <img alt="Photo" className="self-center flex-shrink-0 w-24 h-24 -mt-24 bg-center bg-cover rounded bg-gray-500" style={{ width: "140px", height: "150px" }} src={profile} />
        <div className="flex-1 my-4 mt-8">
          <p className="text-xl font-semibold leading-snug">I have a keen interest in Web Development, I possess a foundational understanding of ObjectOriented Programming (OOPs) concepts. Eager to apply and enhance my skills, I am actively seeking entry-level opportunities to contribute to real-world projects and expand my knowledge in the dynamic field of computer science.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* End About */}

    {/* Start Project */}
    <section id='Project' className="text-black body-font">
      <h2 className="text-3xl font-semibold tracking-wide pt-16 ml-8">Check my Projects</h2>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Card 1 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 object-cover object-center" style={{ width: "100%", height: 225 }} src={g5} alt="Image" />
              <div className="p-6 pt-0">
                <h1 className="title-font text-lg font-bold text-gray-900 mb-3">FastFruits</h1>
                <p className="leading-relaxed mb-3">FastFruits is a website that serve as a digital platform for shopping. Developed using Laravel, Javascript and Bootstrap.</p>
                <div className="flex items-center flex-wrap">
                  <a href="#" target="_blank" className="font-medium inline-flex items-center text-lime-500 md:mb-2 lg:mb-0">Demo
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={g1} alt="Images" />
              <div className="p-6">
                <h1 className="title-font text-lg font-bold text-gray-900 mb-3">ManaliTour</h1>
                <p className="leading-relaxed mb-3">ManaliTour is a sleek landing page, developed using Tailwind CSS and HTML for a modern look.</p>
                <div className="flex items-center flex-wrap">
                  <a href="https://manali-tour.netlify.app/" target="_blank" className="text-yellow-400 font-medium inline-flex items-center md:mb-2 lg:mb-0">Demo
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="p-4 md:w-1/4">
            <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={g3} alt="Images" />
              <div className="p-6">
                <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Dine Out | Restro & Cafe</h1>
                <p className="leading-relaxed mb-3">Dine Out | Restro & Cafe is a landing page. Developed using Bootstrap, Tailwind CSS and HTML.</p>
                <div className="flex items-center flex-wrap">
                  <a href="https://dine-out-restro.netlify.app/" target="_blank" className="text-red-500 font-medium inline-flex items-center md:mb-2 lg:mb-0">Demo
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="p-4 md:w-1/4 text-center">
            <div className="h-full bg-black rounded-lg overflow-hidden py-16">
              <div className="p-6">
                <h1 className="title-font text-3xl font-bold text-white mb-6">Discover all my Projects</h1>
                <p className="leading-relaxed text-white text-lg mb-6">I am a Web Developer who loves to create websites.</p>
                <div className="flex items-center justify-center flex-wrap pb-16">
                  <Link to="/Projects" className="text-white font-medium inline-flex items-center md:mb-2 lg:mb-0">More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Project */}
  </>
);

export default App;
