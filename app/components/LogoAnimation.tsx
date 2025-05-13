"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import  git  from "../assets/git.png"; 

const images = [
  {
    src: "https://cdn.brandfetch.io/idTqV2BNgX/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 1",
  },
  {
    src: "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 2",
  },
  {
    src: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 3",
  },
  {
    src: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 4",
  },
  {
    src: "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 5",
  },
  {
    src: "https://cdn.brandfetch.io/idXqezdeBu/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 6",
  },
  {
    src: "https://cdn.brandfetch.io/idTqV2BNgX/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 7",
  },
  {
    src: "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 8",
  },
  {
    src: "https://cdn.brandfetch.io/idXqezdeBu/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 9",
  },
  {
    src: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 10",
  },
   {
    src: "https://cdn.brandfetch.io/idTqV2BNgX/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    alt: "Logo 11",
  },
    {
        src: "https://cdn.brandfetch.io/idTqV2BNgX/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        alt: "Logo 12",
    },
    {
        src: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        alt: "Logo 13",
    },
    {
        src: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
        alt: "Logo 14",
    },
  
];

const LogoAnimation = () => {
  return (
    <div className="bg-black/100 opacity-100 py-18 glass">
      <div className="container mx-auto  shadow-2xl shadow-purple-900/90 my-24">
        <div className=" overflow-hidden [mask-image:linear-gradient(to_right,transparent,_black_75%,_transparent)]">
          <motion.div
            
            animate={{translateX: '-50%'}}
            transition={{ duration: 22,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
             }}
            className="flex gap-18 flex-none pr-14 "
          >
            {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={50}
                  width={60}
                  className="space-x-64"
                />

            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
