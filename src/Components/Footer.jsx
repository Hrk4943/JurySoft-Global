import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 mt-10 text-white w-full">
        <div className="container  mx-auto py-10 px-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0 ">
              <h2 className="text-xl font-semibold">JurySoft</h2>
              <p className="mt-2">
                A place for insightful articles and thoughts.
              </p>
            </div>
            <div className="mt-4 md:mt-0 mr-16">
              <ul className="mt-2 space-y-2">
                <li>
                  <a className="hover:text-blue-500" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-500" href="/">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-500" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-500" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-4">
            <p>
              &copy; {new Date().getFullYear()} My JurySoft. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
