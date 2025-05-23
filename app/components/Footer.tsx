import React from 'react'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin  } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
    { href : 'https://github.com/amirhosseinzakeri715', Icon : AiFillGithub , label: 'Github'},
    { href : 'https://www.linkedin.com/in/amir-hossein-zakeri-032934314/', Icon : AiFillLinkedin , label: 'Linked In'},
    { href : 'https://instagram.com/amirhossein_1608', Icon : AiFillInstagram , label: 'Instagram'},
    { href : 'https://telegram.com/amirhossein_1608', Icon : FaTelegramPlane , label: 'Telegram'},
]

const Footer = () => {
  return (
    <footer className='relative py-8 max-w-[1200px] mx-auto px-4'>
        <div className='md:hidden absolute inset-0 overflow-hidden'>
            <div className='absolute top-[30%] left-1/4 w-[100px] h-[100px] bg-purple-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute top-[16%] left-1/2 w-[150px] h-[70px] bg-purple-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute top-[35%] left-2/3 w-[100px] h-[100px] bg-purple-400 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2'></div>
        </div>

        <div className='hidden md:block absolute inset-0 overflow-hidden'>
            <div className='absolute top-[30%] left-1/4 w-[200px] h-[200px] bg-purple-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute top-[35%] left-1/2 w-[250px] h-[150px] bg-purple-400 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute top-[50%] left-1/3 w-[200px] h-[100px] bg-purple-400 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2'></div>
        </div>

        <div className='relative z-10 text-center mt-8'>
          <h1 className='hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10'>
            Amir Hossein
          </h1>
          <h1 className='md:hidden text-9xl font-bold text-white opacity-10'>
            Amir<br/>Hossein
          </h1>

          <div className='mt-12 flex justify-between  gap-10 max-sm:flex-col'>
            <p className='text-gray-200'>
              2025. All rights reserved.
            </p>

            <ul className='flex gap-5 flex-wrap'>
              {socialLinks.map(({href,Icon,label}) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className='text-gray-200 flex items-center justify-center w-10 h-10 mx-auto rounded-full hover:text-gray-400 transition-colors'
                >
                  <Icon size={30} />

                </a>
              ))}
            </ul>
          </div>
        </div>

    </footer>
  )
}

export default Footer