import * as React from "react";
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [selectedMenu, setSelectedMenu] = React.useState("menu1");

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1
    },
    exit: { y: 20, opacity: 0, transition: { duration: 0.5 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    },
    exit: { opacity: 0, y: -50, scale: 0.8, rotate: 10, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const buttonVariants = {
    // Variasi untuk tombol aktif
    active: {
      backgroundColor: "rgb(255, 255, 255)", // Warna latar belakang saat tombol aktif
      color: "#000000", // Warna teks saat tombol aktif
      scale: 1.1, // Skala saat tombol aktif
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 50
        
      }
    },
    // Variasi untuk tombol tidak aktif
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Warna latar belakang saat tombol tidak aktif dengan opasitas 50%
      color: "rgba(255, 255, 255, 0.3)", // Warna teks saat tombol tidak aktif
      scale: 1, // Skala normal saat tombol tidak aktif
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      {/* Navbar */}
      <motion.nav
        className="bg-white bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-2xl w-full max-w-sm text-center mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="https://fauziresume.vercel.app/">
            <img
              src="/img/profile.jpg"
              alt="Profile"
              className="rounded-full w-10 h-10 border-2 border-black shadow-xl"
            />
            </a>
            <div>
              <h1 className="text-lg font-bold text-gray-900 text-left">@fauziiwd</h1>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <a href="https://github.com/Fauziwd" className="text-red-500 hover:text-red-700">
              <img src="/img/vector/github.png" alt="IG" className="w-6 h-6" />
            </a>
            <a href="https://x.com/Akufauzi2" className="text-blue-500 hover:text-blue-700">
              <img src="/img/vector/x.png" alt="X" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/fauzi-dwi" className="text-green-500 hover:text-green-700">
              <img src="/img/vector/linkedin.png" alt="LI" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.nav>

      <div className="flex justify-center items-center mb-8">
      <div className="flex space-x-4 bg-white bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-xl justify-center">
        <motion.button
          className="px-4 py-2 rounded-lg"
          variants={buttonVariants}
          animate={selectedMenu === "menu1" ? "active" : "inactive"}
          onClick={() => setSelectedMenu("menu1")}
        >
          Menu 1
        </motion.button>
        <motion.button
          className="px-4 py-2 rounded-lg"
          variants={buttonVariants}
          animate={selectedMenu === "menu2" ? "active" : "inactive"}
          onClick={() => setSelectedMenu("menu2")}
        >
          Menu 2
        </motion.button>
        <motion.button
          className="px-4 py-2 rounded-lg"
          variants={buttonVariants}
          animate={selectedMenu === "menu3" ? "active" : "inactive"}
          onClick={() => setSelectedMenu("menu3")}
        >
          Menu 3
        </motion.button>
      </div>
    </div>

      {/* Dynamic Content */}
      <AnimatePresence>
        {selectedMenu === "menu1" && (
          <motion.div>
            <motion.div
              key="menu1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="p-4 bg-white bg-opacity-50 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold">Content for Menu 1</h2>
              <p>This is the content for the first menu.</p>
            </motion.div>


            <motion.div
              className=" p-6 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link A
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-green-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link B
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-red-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link C
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-purple-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link D
              </motion.a>
            </motion.div>
          </motion.div>
        )}

        {selectedMenu === "menu2" && (
          <motion.div>
            <motion.div
              key="menu2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              variants={contentVariants}
              className="p-4 bg-white bg-opacity-50 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold">Content for Menu 2</h2>
              <p>This is the content for the second menu.</p>
            </motion.div>
            <motion.div
              className="p-6 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link 1
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-green-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link 2
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-red-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link 3
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-purple-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link 4
              </motion.a>
            </motion.div>
          </motion.div>
        )}
        {selectedMenu === "menu3" && (
          <motion.div>
            <motion.div
              key="menu3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              variants={contentVariants}
              className="p-4 bg-white bg-opacity-50 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold">Content for Menu 3</h2>
              <p>This is the content for the third menu.</p>
            </motion.div>
            <motion.div
              className="p-6 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link I
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-green-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link II
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-red-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link III
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-purple-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
              >
                Link IV
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
