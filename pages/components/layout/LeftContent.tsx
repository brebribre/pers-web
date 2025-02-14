import Icon from '@/pages/components/reusables/Icon';

function LeftContent() {
  return (
    <div>
      <div className="pt-14 ml-12 mr-10 lg:fixed pb-10">
        <div className="text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-lime-100 xl:text-7xl lg:text-7xl md:text-6xl">
            Hi, i&apos;m Bryan Alvin
          </h1>
          <p className="mt-4 text-lg text-slate-400 font-normal max-w-lg">
            B.Sc @TUM Informatics, working student @Infineon and passionate in
            my journey as a software engineer &#x1f57a;
          </p>

          <div className="my-4 flex items-center justify-left gap-x-6">
            <Icon
              url="https://www.linkedin.com/in/bryanalvin/"
              src="linkedin.svg"
              alt="linkedin-icon"
            />
            <Icon
              url="https://www.instagram.com/bryan.alvinn/"
              src="instagram.svg"
              alt="instagram-icon"
            />
            <Icon
              url="https://github.com/brebribre"
              src="github.svg"
              alt="github-icon"
            />
          </div>

          <div className="lg:fixed lg:bottom-10 lg:block hidden max-w-sm">
            <p className="text-1xl mt-10 text-blue-300 opacity-50 font-light">
              This page are created using Next.js, styled with Tailwind.css and
              deployed with Vercel.
            </p>
            <p className="text-1xl mt-4 text-blue-300 opacity-50 font-bold ">
              Copyright © 2025 Bryan Alvin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContent;
