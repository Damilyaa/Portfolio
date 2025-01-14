import React from 'react';
import { motion } from 'framer-motion';
import '../Skills.css';

const Pl = () => {
    return (
        <motion.div
        className="about-skills"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
       <div className="programmingLanguages">
            <h3>Programming Languages</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>Go</li>
          <li>Databases (MySQL, PostgreSQL)</li>
        </ul>
       </div>
      </motion.div>
    );
};

export default Pl




