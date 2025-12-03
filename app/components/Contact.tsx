"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-32 text-white w-full bg-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-16"
        >
          <div className="space-y-8 md:space-y-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300"
            >
              Get in <span className="text-purple-400">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl space-y-6 md:space-y-8"
            >
              <div className="space-y-2">
                <p className="text-base md:text-lg text-purple-400 font-medium">Phone</p>
                <a
                  href="tel:+989908884402"
                  className="text-lg md:text-xl font-semibold hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                >
                  +98 0990 888 44 02
                  <span className="text-gray-500">↗️</span>
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-base md:text-lg text-purple-400 font-medium">Email</p>
                <a
                  href="mailto:amirhosseinzakeri715@gmail.com"
                  className="text-base md:text-lg font-semibold hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 break-all"
                >
                  amirhosseinzakeri715@gmail.com
                  <span className="text-gray-500">↗️</span>
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-base md:text-lg text-purple-400 font-medium">Office</p>
                <address className="text-base md:text-lg not-italic leading-relaxed text-gray-300">
                  Shahriyar,
                  <br />
                  Tehran,
                  <br />
                  Iran
                </address>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
              <iframe 
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.97277512252!2d51.21752118359375!3d35.69699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1716407000000!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tehran Map"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
