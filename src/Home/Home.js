import Me from "./../images/Me.png";

export const Home = () => {
  return (
    <div className="flex flex-col items-center" id="home">
      <img
        src={Me}
        className="mt-52 z-10 object-scale-down shadow-xl rounded-full h-auto align-middle border-none h-80 w-80 bg-gradient-to-b from-sky-400 to-slate-800 dark:bg-gradient-to-b from-sky-400 to-slate-800  "
      />
      <p className="z-10 text-sky-900 dark:text-sky-300 text-5xl mt-20">
        Alex Saraev
      </p>
      <p className="z-10 text-sky-900  dark:text-slate-200  mt-4 font-bold text-lg">
        Front-End Developer
      </p>
      <div className="z-10 flex mt-4 space-x-4">
        <a
          target="_blank"
          href="https://www.instagram.com/alexsaraev.15/"
          className="text-white bg-sky-800 dark:bg-slate-700 hover:bg-sky-700 dark:hover:bg-slate-600 text-white font-bold py-2 px-4 border-b-4 border-pink-500 rounded drop-shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 102 102"
          >
            <defs>
              <radialGradient
                id="a"
                cx="6.601"
                cy="99.766"
                r="129.502"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".09" stop-color="#fa8f21" />
                <stop offset=".78" stop-color="#d82d7e" />
              </radialGradient>
              <radialGradient
                id="b"
                cx="70.652"
                cy="96.49"
                r="113.963"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" />
                <stop offset="1" stop-color="#8c3aaa" />
              </radialGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
              data-name="Path 16"
            />
            <path
              fill="url(#b)"
              d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
              data-name="Path 17"
            />
            <path
              fill="#fff"
              d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
              data-name="Path 18"
              transform="translate(-422.637 -426.196)"
            />
          </svg>
        </a>
        <a
        target='_blank'
          href="https://www.linkedin.com/in/saraev-alexandru-5a3baa265/"
          className="text-white bg-sky-800 dark:bg-slate-700 hover:bg-sky-700 dark:hover:bg-slate-600 text-white font-bold py-2 px-4 border-b-4 border-sky-600 hover:border-blue-500 rounded drop-shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
          >
            <path
              d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z"
              fill="#0177b5"
            />
            <path
              d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      <a
        href="download"
        class="bg-sky-800 dark:bg-slate-700 hover:bg-sky-700 dark:hover:bg-slate-600 text-slate-200 font-bold py-2 px-2 rounded inline-flex items-center border-b-4 border-blue-500 dark:border-slate-200 rounded mt-3 drop-shadow-2xl"
      >
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download CV</span>
      </a>
      <div className="z-0 hidden md:block absolute top-20 inset-x-60 w-72 h-72 bg-purple-900 dark:bg-fuchsia-500 rounded-full filter blur-lg opacity-80 dark:opacity-50 animate-blob sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 animate-blob"></div>
      <div className="z-0 hidden md:block absolute top-52 right-96 w-72 h-72 bg-emerald-900 dark:bg-emerald-400 rounded-full filter blur-lg opacity-80 dark:opacity-50 animate-blob animation-delay-2000 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 animation-delay-2000"></div>
      <div className="z-0 hidden md:block absolute bottom-20 left-96 w-72 h-72 bg-blue-700 dark:bg-blue-300 rounded-full filter blur-lg opacity-80 dark:opacity-50 animate-blob animation-delay-4000 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 animation-delay-4000"></div>
    </div>
  );
};
