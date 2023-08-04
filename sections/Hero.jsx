'use client';

import { motion } from 'framer-motion'

import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import 

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16`}>
    <motion.div variants={staggerContainer}>
    </motion.div>
  </section>
);

export default Hero;
