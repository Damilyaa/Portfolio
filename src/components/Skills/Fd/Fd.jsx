import React from 'react';
import { motion } from 'framer-motion';
import '../Skills.css';

const Fd = () => {
    return (
        <motion.div
        className="about-skills"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
       <div className="frontendDevelopment">
        <h3>Frontend Development</h3>
        <ul>
            <li>HTML / CSS</li>
            <li>React</li>
            <li>React Router</li>
            <li>Redux</li>
        </ul>
       </div>

      </motion.div>
    );
};

export default Fd




