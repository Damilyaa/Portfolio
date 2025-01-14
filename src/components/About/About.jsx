import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import Fd from '../Skills/Fd/Fd';
import St from '../Skills/St/St';
import Pl from '../Skills/Pl/Pl';
import me from '../img/me.jpeg'; 

const About = () => {
  return (
    <>
    <div className="awhole">
      <div className="about">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="name"> <strong>Name: </strong> Amangeldykyzy Damilya</div>
          <div className="education"><strong>Education: </strong>Astana IT University | Software Engineering | 2 years</div>
          <div className="additional"><strong>Additional: </strong> nfactorial! Fullstack development course  
            {/* <div className="nfactorial">nfactorial! Fullstack development course</div>
            <div className="tomorrow">Tomorrow School at Astana Hub</div> */}
          </div>
        </motion.p>
        <img src={me} alt="me" width="340" style={{borderRadius: 100}}/>  
      </div>
      <div className="skills">
        <Fd />
        <Pl />
        <St />
      </div>
    </div>
    </>
  );
};

export default About;
