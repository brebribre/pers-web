import { SocialIcon } from 'react-social-icons';
import { useState, useEffect} from 'react';
import { log } from 'console';

const links = [
    { name: 'Instagram', href: 'https://www.instagram.com/bryan.alvinn/' },
    { name: 'Linkedin', href: 'https://www.linkedin.com/in/bryan-alvin-b652581b7/' },
    { name: 'Github', href: 'https://github.com/brebribre' }
]


function HeroContent(props: any) {


    return (<div>
        <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-20 md:fixed md:ml-20">

            <div className="text-left">
                <h1 className="text-7xl font-bold tracking-tight text-zinc-200 lg:text-9xl">
                    Bryan Alvin
                </h1>
                <p className="mt-3 text-3xl font-thin text-gray-400 max-w-sm ">I am a Web Developer.</p>
                <p className="mt-3 text-1xl text-gray-400 max-w-sm ">I craft digital experiences and empowers the web through design, code, and innovation.</p>
             
                <div className="mt-4 flex items-center justify-left gap-x-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-lime-200">
                        Linkedin <span aria-hidden="true">→</span>
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-lime-200">
                        Instagram <span aria-hidden="true">→</span>
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-lime-200">
                        GitHub <span aria-hidden="true">→</span>
                    </a>
                </div>
         
            </div>
        </div>

    </div>)
}

export default HeroContent;