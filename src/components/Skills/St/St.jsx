import React from 'react';
import { motion } from 'framer-motion';
import '../Skills.css';

const St = () => {
    return (
        <motion.div
        className="about-skills"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
       <div className="softwareTools">
       <h3>Software Tools</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Visual Studio Code</li>
        </ul>
       </div>
      </motion.div>
    );
};

export default St




