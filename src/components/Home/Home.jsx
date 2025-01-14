import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import About from '../About/About';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <>
    <div className="home">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.h2
        className="home-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a Web Developer
      </motion.h2>
    </div>
    <About/>
    <Projects/>
    </>
  );
};

export default Home;