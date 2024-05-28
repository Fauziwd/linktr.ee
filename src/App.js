import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      {/* Navbar */}
      <motion.nav className="bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-2xl w-full max-w-sm text-center mb-4"initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/img/profile.jpg"
              alt="Profile"
              className="rounded-full w-10 h-10 border-2 border-black shadow-xl"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900 text-left">@fauziiwd</h1>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 5.18c-.58.25-1.19.42-1.83.5.66-.4 1.17-1.03 1.41-1.78-.62.37-1.31.64-2.05.79-.59-.63-1.43-1.03-2.35-1.03-1.77 0-3.2 1.42-3.2 3.17 0 .25.03.5.08.73-2.65-.13-5.01-1.4-6.59-3.33-.28.49-.44 1.06-.44 1.67 0 1.16.59 2.18 1.49 2.77-.55-.02-1.06-.17-1.5-.42v.04c0 1.62 1.13 2.97 2.64 3.28-.28.08-.57.13-.87.16-.21-.02-.4-.06-.59-.11.4 1.27 1.57 2.19 2.96 2.22-1.08.85-2.44 1.36-3.91 1.36-.25 0-.49-.02-.73-.05 1.39.89 3.04 1.41 4.81 1.41 5.77 0 8.92-4.78 8.92-8.92 0-.14 0-.28-.01-.41.61-.44 1.15-1 1.57-1.63z" />
              </svg>
            </a>
            <a href="#" className="text-green-500 hover:text-green-700"></a>
            <a href="#" className="text-red-500 hover:text-red-700"></a>
          </div>
        </div>
      </motion.nav>

      <motion.div className="mt-20 p-6 h-72 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://example.com/link1"
          className="block w-full px-4 py-7 text-center text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
          variants={item}
        >
          Link 1
        </motion.a>
        <motion.a
          href="https://example.com/link2"
          className="block w-full px-4 py-7 text-center text-white bg-green-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
          variants={item}
        >
          Link 2
        </motion.a>
        <motion.a
          href="https://example.com/link3"
          className="block w-full px-4 py-7 text-center text-white bg-red-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
          variants={item}
        >
          Link 3
        </motion.a>
        <motion.a
          href="https://example.com/link4"
          className="block w-full px-4 py-7 text-center text-white bg-purple-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
          variants={item}
        >
          Link 4
        </motion.a>
      </motion.div>
    </div>
  );
};

export default App;

