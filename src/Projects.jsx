import React from "react";
import g4 from "./images/g4.png";
import g2 from "./images/g2.png";

export default function Projects() {
  return (
    <>
      <section className="text-black body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Card 1 */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 object-cover object-center transition duration-300 transform hover:shadow-2xl hover:border-4 hover:border-white"
                  src={g4}
                  alt="Image"
                />
                <div className="p-6 pt-0">
                  <h1 className="title-font text-lg font-bold text-gray-900 mt-6 mb-3">
                    Adilqadri Clone
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Adilqadri Clone is a clone of a perfumes website. Developed
                    using Bootstrap and Tailwind CSS.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href="https://main--adilqadri-clone.netlify.app/"
                      target="_blank"
                      className="font-medium inline-flex items-center text-red-700 md:mb-2 lg:mb-0"
                    >
                      Demo
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
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
                <img
                  className="lg:h-48 md:h-36 object-cover object-center transition duration-300 transform hover:shadow-2xl hover:border-4 hover:border-white"
                  src={g2}
                  alt="Images"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    WhiteFalcon Publishing
                  </h1>
                  <p className="leading-relaxed mb-3">
                    WhiteFalcon Publishing is a clone website. Developed using
                    Tailwind CSS and HTML.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href="https://whitefalcon.netlify.app/"
                      target="_blank"
                      className="text-black font-medium inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Demo
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
