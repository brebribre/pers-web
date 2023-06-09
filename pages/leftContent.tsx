import { SocialIcon } from 'react-social-icons';
import { useState, useEffect} from 'react';
import { log } from 'console';
import Image from 'next/image'
import Icon from './icon'
import Option from './Option'

function LeftContent(props: any) {
    return (<div>
        <div className="max-w-2xl pt-20 sm:pt-20 lg:py-20 md:fixed md:ml-10">

            <div className="text-left">
   
                <h1 className="text-5xl font-semibold tracking-tight text-lime-100 xl:text-8xl lg:text-7xl md:text-7xl">
                    Bryan Alvin
                </h1>
                <p className="mt-4 text-2xl lg:text-3xl font-bold text-gray-300 max-w-sm ">I am a Web Developer.</p>
                <p className="mt-4 text-1xl text-gray-400 font-semibold max-w-sm">I craft digital experiences and empowers the web through design, code, and innovation.</p>

                <div className = "mt-5 w-40">
                {/*
                <a
                href="/cv.pdf"
                download="CV_BryanAlvin"
                target="_blank"
                rel="noreferrer"
                className = "z-20 border-2 text-sm text-center py-2 px-4 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black">
                Download my CV
                </a>
                */}
                    
                
                </div>

                <div className="mt-8 flex items-center justify-left gap-x-6">    
                    <Icon 
                        url= "https://www.linkedin.com/in/bryan-alvin-b652581b7/"
                        src="linkedin.svg"
                        alt="linkedin-icon"
                    />
                    <Icon 
                        url = "https://www.instagram.com/bryan.alvinn/"
                        src="instagram.svg"
                        alt="instagram-icon"
                    />
                    <Icon 
                        url = "https://github.com/brebribre"
                        src="github.svg"
                        alt="github-icon"
                    />
                </div>

                
                
                <div className="lg:fixed lg:bottom-10 lg:block hidden max-w-sm">
                    <p className="text-1xl mt-10 text-blue-300 opacity-50 font-light">This page are created using Next.js, styled with Tailwind.css and deployed with Vercel.</p>
                    <p className="text-1xl mt-4 text-blue-300 opacity-50 font-bold ">Copyright © 2023 Bryan Alvin</p>
                </div>
                
            </div>
        </div>

    </div>)
}

export default LeftContent;