import { SocialIcon } from 'react-social-icons';
import { useState, useEffect} from 'react';
import { log } from 'console';
import Image from 'next/image'
import Icon from '../ui/icon'
import Option from '../ui/Option'

function LeftContent(props: any) {
    return (<div>
        <div className="max-w-2xl pt-14 md:fixed md:ml-10">

            <div className="text-left">
   
                <h1 className="text-5xl font-semibold tracking-tight text-lime-100 xl:text-7xl lg:text-7xl md:text-7xl">
                    Hi, i&apos;m Bryan
                </h1>
                <p className="mt-4 text-1xl text-gray-500 font-normal max-w-sm">a student @TUM Informatics, currently a member @TUM.ai and passionate in my journey as a web developer!</p>


                <div className="my-4 flex items-center justify-left gap-x-6">    
            
                     <Icon 
                        url= "https://www.linkedin.com/in/bryanalvin/"
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
                    <div className = "text-slate-200 grid content-center text-sm h-8 w-12 bg-slate-800 border-none rounded-md text-center my-auto hover:opacity-50 ">
                        {
                        <a
                        href="/cv.pdf"
                        download="CV_BryanAlvin"
                        target="_blank"
                        rel="noreferrer"
                        className = "">
                        CV ↓
                        </a>
                        }    
                    </div>   
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