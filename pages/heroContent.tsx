import { SocialIcon } from 'react-social-icons';
import { useState, useEffect} from 'react';
import { log } from 'console';




function HeroContent(props: any) {
    return (<div>
        <div className="max-w-2xl pt-20 sm:pt-20 lg:py-20 md:fixed md:ml-10">

            <div className="text-left">
                <h1 className="text-5xl font-semibold tracking-tight text-lime-100 xl:text-8xl lg:text-7xl md:text-7xl">
                    Hi, i'm Bryan.
                </h1>
                <p className="mt-4 text-2xl lg:text-3xl font-bold text-gray-300 max-w-sm ">I am a Web Developer.</p>
                <p className="mt-4 text-1xl text-gray-400 font-semibold max-w-sm">I craft digital experiences and empowers the web through design, code, and innovation.</p>
                <p className="mt-10 lg:mt-40 text-2xl text-gray-400 font-semibold max-w-sm">Find me at :</p>
                <p className="mt-2 text-lime-200 font-bold opacity-80">alvinbryan78@gmail.com</p>
                <div className="mt-4 flex items-center justify-left gap-x-6">
                    <a href="https://www.linkedin.com/in/bryan-alvin-b652581b7/" className="z-50 text-sm font-semibold leading-6 text-lime-200">
                        Linkedin <span aria-hidden="true">→</span>
                        
                    </a>
                    <a href="https://www.instagram.com/bryan.alvinn/" className="z-50 text-sm font-semibold leading-6 text-lime-200">
                        Instagram <span aria-hidden="true">→</span>
                    </a>
                    <a href="https://github.com/brebribre" className="z-50 text-sm font-semibold leading-6 text-lime-200">
                        GitHub <span aria-hidden="true">→</span>
                    </a>
                </div>
                <div className="lg:fixed lg:bottom-10 lg:block hidden max-w-sm">
                    <p className="text-1xl mt-10 text-blue-300 opacity-50 font-light">This page are created using Next.js, styled with Tailwind.css and deployed with Vercel.</p>
                    <p className="text-1xl mt-4 text-blue-300 opacity-50 font-bold ">Copyright © 2023 Bryan Alvin</p>
                </div>
                
            </div>
        </div>

    </div>)
}

export default HeroContent;