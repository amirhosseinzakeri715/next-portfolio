"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineArrowUp } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const NavLinks = useMemo(() => [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Stack", path: "#stack" },
    { title: "Contact", path: "#contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const renderNavLinks = (className: string) => (
    <ul className={className}>
      {NavLinks.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className="transform hover:text-white/40 transition-all duration-500 ease-in-out"
            onClick={closeNav}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="z-50 fixed flex justify-center w-full text-white font-bold">
        <div className="border border-white/20 mt-6 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-1 max-w-[650px] mx-auto">
          {renderNavLinks("flex flex-row p-2 px-4 space-x-14")}
        </div>

        <div
          onClick={toggleNav}
          className="md:hidden fixed top-6 right-6 border border-white/20 backdrop-blur-3xl rounded-xl z-50 text-white/70 p-2"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div
          className={`fixed left-0 top-0 w-full h-full bg-black/95 backdrop-blur-3xl transform transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {renderNavLinks("flex flex-col items-center justify-center space-y-8 h-full")}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-purple-500/20 backdrop-blur-3xl border border-purple-500/30 text-white transition-all duration-300 ${
          showTopButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <AiOutlineArrowUp size={24} />
      </button>
    </>
  );
};

export default Navbar;
