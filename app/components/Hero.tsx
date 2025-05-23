'use client';
import { motion } from 'framer-motion';
import profilepic from '../../public/assets/profilepic.jpg';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="relative overflow-hidden min-h-screen w-full text-white bg-gradient-to-t from-[hsl(297,67%,27%)] via-[rgb(0,0,0)] to-[rgb(214,1,247)]"
    >
      {/* Radial Overlay */}
      <div className="absolute top-[450px] left-1/2 -translate-x-1/2 w-[2400px] h-[1000px] rounded-[50%] border-[2px] border-[#BD8CDE]/30 md:top-[350px] sm:top-[400px]"
        style={{
          background: 'radial-gradient(closest-side, #000 50%, #9E4AC5)',
        }}
      />

      {/* Content Container */}
      <div className="relative w-full mx-auto px-4 pt-12 pb-24">
        <div className='flex flex-col items-center justify-center text-center z-10'>
            {/* Profile Image */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8 mt-12 md:mt-24"
            >
            <div className="absolute inset-0 bg-gradient-to-b from-[#cc04e3] to-transparent rounded-full blur-3xl"></div>
                <Image
                src={profilepic}
                alt="Amir Hossein Zakeri"
                className="relative z-10 w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full object-cover"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I am <br />
            Amir Hossein <span className="text-purple-300">Zakeri</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
            A Full-Stack Developer specializing in Next.js, TypeScript, and Tailwind CSS. Currently pursuing my degree while crafting modern web experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-lg"
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors text-lg"
            >
              My Works
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
