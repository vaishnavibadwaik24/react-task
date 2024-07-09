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
      <h2 className="text-4xl font-bold underline tracking-wide pt-16 ml-8">Check my Projects</h2>
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

    {/* Start Contact */}
    <section id='Contact' className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h1 className="text-5xl font-bold pb-20 pt-10 underline text-center">Say Hi!</h1>
  <div className="w-full max-w-5xl mx-auto p-8 space-y-6 rounded-xl bg-white shadow-lg flex flex-col md:flex-row">
    {/* Left Side Form */}
    <form noValidate className="w-full md:w-2/3 p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full">
          <label className="block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-80 border-b-2 border-gray-300 focus:border-black focus:outline-none py-2"
          />
        </div>
      </div>
      <div className="w-full">
        <label className="block mb-1 text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-80 border-b-2 border-gray-300 focus:border-black focus:outline-none py-2"
        />
      </div>
      <div className="w-full">
        <label className="block mb-1 text-gray-700">Your Message</label>
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-80 border-b-2 border-gray-300 focus:border-black focus:outline-none py-2"
        ></textarea>
      </div>
      <button
        type="button"
        className="bg-black text-white px-6 py-2 rounded-full self-start ml-20"
      >
        Send Message
      </button>
    </form>
    {/* Right Side Content */}
    <div className="w-full md:w-1/2 bg-black text-white p-6 rounded-xl space-y-6">
      <h2 className="text-2xl font-bold px-8 mt-10">Contact Information</h2>
      <p className='px-8'>Fill up the form and will get back to you within 24 hours.</p>
      <div className="space-y-4">
        <p className="flex items-center px-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 sm:mr-5">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
          <span>8805881762</span>
        </p>
        <p className="flex items-center px-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 mr-2 sm:mr-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
          <span>vaishnavib2428@gmail.com</span>
        </p>
      </div>
    </div>
  </div>
</section>





    {/* End Contact */}

  </>
);

export default App;
