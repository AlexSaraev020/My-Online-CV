
import MeInsta from "./../images/Me2.png";

export const About = () => {
  return (
    <div class="p-16 pt-56 flex justify-center" id="about">
      <div class="p-8 bg-blue-200 dark:bg-slate-800 shadow border-y-4 border-sky-600 dark:border-sky-300 rounded-3xl max-w-screen-2xl ">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="grid grid-cols-3 text-center order-last md:order-first mt-32 md:mt-0 max-md:flex flex-col items-center max-[1115px]:flex">
            <div className="max-md:flex flex-row items-center space-x-2">
              <p class="font-bold text-sky-600 dark:text-sky-300 text-xl max-md:text-base">
                19
              </p>
              <p class="text-black dark:text-slate-200 max-md:text-xs">Years</p>
            </div>
            <div className="max-md:flex flex-row items-center space-x-2">
              <p class="font-bold text-sky-600 dark:text-sky-300 text-xl max-md:text-base">
                6 Months
              </p>
              <p class="text-black dark:text-slate-200 max-md:text-xs">
                Experience
              </p>
            </div>
            <div className="max-md:flex flex-row items-center space-x-2">
              <p class="font-bold text-sky-600 dark:text-sky-300 text-xl max-md:text-base">
                2
              </p>
              <p class="text-black dark:text-slate-200 max-md:text-xs ">
                Small Projects Finished
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="w-48 h-48  bg-gradient-to-b from-sky-400 to-slate-800 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src={MeInsta} className="rounded-full" />
            </div>
          </div>
        </div>

        <div class="mt-20 text-center pb-36">
          <h1 class="text-4xl font-medium text-sky-600 dark:text-sky-300">
            Alex Saraev,
          </h1>
          <p class="font-base dark:font-light text-black dark:text-slate-200 mt-3">
            Bucharest, Romania
          </p>

          <p class="mt-8 text-black dark:text-slate-200">
            Junior Front-End Developer
          </p>
          <p class="mt-2 text-black dark:text-slate-200">
            Scoala Informala Bucharest
          </p>
        </div>

        <div class="mt-12 flex flex-col text-center text-lg border-t border-black dark:border-slate-200 pb-12">
          <p class="text-black dark:text-slate-200 lg:px-16 mt-4">
            I am a boy passionate about programming and IT who has always liked
            to understand how the things he uses every day work. In addition to
            front-end, I also have a passion for game development. I used unity
            and together with a friend I developed a game for Android. I
            discovered my passion for IT at a young age, starting from
            installing certain programs from the Internet, to installing or
            repairing errors in windows, to the programming that I do it
            everyday now.
          </p>
        </div>
      </div>
    </div>
  );
};
