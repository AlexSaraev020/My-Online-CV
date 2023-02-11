import { scroller } from "react-scroll";
import { Link } from "react-scroll";
import { useState } from "react";

const handleClick = (sectionId) => {
  scroller.scrollTo(sectionId, {
    duration: 1000,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

export const Header = ({ toggleDarkMode }) => {
  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <nav className="flex flex-row fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-gray-200 px-2 py-1.5  sm:px-4">
        <div className="flex flex-wrap w-full justify-between space-x-8">
          <button className="flex items-center">
            <Link
              onClick={() => handleClick("home")}
              className="text-2xl self-center text-xl font-semibold whitespace-nowrap hover:text-sky-300 dark:hover:text-white text-sky-600 dark:text-sky-300"
            >
              Alex Saraev
            </Link>
          </button>
        </div>
        <div className="mt-2">
          <button onClick={toggleDarkMode}>
            <div className="w-10 h-10 rounded-full bg-yellow-400 dark:bg-transparent p-1 hover:dark:bg-sky-900 hover:bg-yellow-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="dark:hidden "
              >
                <path
                  className="text-white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="hidden dark:list-item"
              >
                <path
                  className="text-sky-300"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="container flex flex-row items-center w-full justify-end ">
          <button
            onClick={handleShow}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto "
            id="navbar-default"
          >
            <ul className=" flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-inherit ">
              <li>
                <Link
                  onClick={() => handleClick("home")}
                  className="text-lg font-bold cursor-pointer block py-2 pl-3 pr-4 text-sky-700 hover:text-sky-300  bg-blue-700 rounded md:bg-transparent dark:text-sky-300 md:p-0 dark:hover:text-white text-base"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleClick("skills")}
                  className="text-lg font-bold cursor-pointer block py-2 pl-3 pr-4 hover:text-sky-300 text-sky-700 rounded dark:hover:text-white md:p-0 dark:text-sky-300 dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-base"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleClick("about")}
                  className="text-lg font-bold cursor-pointer block py-2 pl-3 pr-4 text-sky-700 hover:text-sky-300 rounded md:border-0 md:p-0 dark:text-sky-300 dark:hover:text-white text-base"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleClick("contact")}
                  className="text-lg font-bold cursor-pointer block py-2 pl-3 pr-4 text-sky-700 rounded hover:text-sky-300 md:border-0 md:p-0 dark:text-sky-300 dark:hover:text-white text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-[768px]:w-full mt-16 text-white md:hidden fixed z-20 flex flex-row justify-end">
        {showNav && (
          <ul className=" w-1/4 flex flex-col items-center bg-white dark:bg-slate-900 rounded-3xl border-sky-300 border-[1px]">
            <li>
              <Link
                onClick={() => handleClick("home")}
                className="font-bold cursor-pointer block py-2 pl-3 pr-4 text-sky-700 hover:text-sky-300 rounded md:bg-transparent dark:text-sky-300 md:p-0 dark:hover:text-white text-base"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("skills")}
                className="font-bold cursor-pointer block py-2 pl-3 pr-4 hover:text-sky-300 text-sky-700 rounded dark:hover:text-white md:p-0 dark:text-sky-300 dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-base"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("about")}
                className="font-bold cursor-pointer block py-2 pl-3 pr-4 text-sky-700 hover:text-sky-300 rounded md:border-0 md:p-0 dark:text-sky-300 dark:hover:text-white text-base"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("contact")}
                className="font-bold cursor-pointer block py-2 pl-3 pr-4 text-sky-700 rounded hover:text-sky-300 md:border-0 md:p-0 dark:text-sky-300 dark:hover:text-white text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
