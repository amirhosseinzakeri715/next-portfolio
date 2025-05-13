'use client';
import { motion } from 'framer-motion';
import profilepic from '../../public/assets/profilepic.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <div
      className="relative overflow-clip min-h-screen text-white bg-gradient-to-t from-[hsl(297,67%,27%)] via-[rgb(0,0,0)] to-[rgb(214,1,247)]"
    >
      {/* Radial Overlay */}
      <div className="absolute  top-[450px] left-1/2 -translate-x-1/2 w-[2400px] h-[1000px] rounded-[50%] border-[2px] border-[#BD8CDE]/30"
        style={{
          background: 'radial-gradient(closest-side, #000 50%, #9E4AC5)',
        }}
      />

      {/* Content Container */}
      <div className="container relative  mx-auto px-4 pt-12 pb-24 ">
        <div className='flex flex-col items-center justify-center text-center z-10'>
            {/* Profile Image */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8 mt-24"
            >
            <div className=" absolute inset-0 bg-gradient-to-b from-[#cc04e3] to-transparent rounded-full blur-3xl "></div>
                <Image
                src={profilepic}
                alt="Amir Hossein Zakeri"
                className="relative z-10 w-[250px] h-[250px] rounded-full object-cover "
                priority
                />
            
            </motion.div>
        </div>


        {/* Text and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center z-10"
        >
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
            Hi, I am <br />
            Amir Hossein <span className="text-purple-300">Zakeri</span>
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-white/90">
            I'm a frontend developer who loves to craft beautiful and functional web experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              My Works
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
