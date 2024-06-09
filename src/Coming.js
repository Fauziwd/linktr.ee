import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./css/coming.css";

const Coming = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white font-retro-coming p-4" style={{ backgroundImage: "url('/img/lottie/construction.gif')" }}>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center p-12 bg-gray-900 rounded-lg mx-4" style={{  borderColor: '#fff', borderWidth: '2px' }}
      >
        <h1 className="text-6xl font-bold mb-4 text-neon-green-coming">Coming Soon</h1>
        <p className="text-2xl mb-8">We're working hard to bring this page to you. Stay tuned!</p>
        <motion.img
          src="/img/lottie/coding.gif"
          alt="Under Construction"
          className="w-1/3 mx-auto mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <Link
          to="/"
          className="px-8 py-4 bg-neon-coming text-gray-800 font-semibold rounded-lg shadow-lg transition duration-300 font-retro-coming"
        >
          Go Back Home
        </Link>
      </motion.div>
      <img src="/img/logo.png" alt="Logo" className="logo-bottom" />
    </div>
  );
};

export default Coming;
