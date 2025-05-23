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
    <footer className="w-full py-8 bg-black text-center">
      <div className="flex flex-col items-center gap-8">
        <ul className="flex gap-8 md:gap-12 justify-center">
          {socialLinks.map(({href,Icon,label}) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="text-gray-200 hover:text-purple-400 transition-transform duration-200 transform hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={28} className="md:size-10" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 text-lg font-semibold tracking-wide">&copy; 2025. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer