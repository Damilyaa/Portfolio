import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="home">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact me via: LinkedIn, Mail, GitHub
      </motion.h1>
      <motion.h2
        className="home-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        [link1], [link2]
      </motion.h2>
    </div>
  );
};

export default Contact;