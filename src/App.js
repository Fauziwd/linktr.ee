import React, { useState } from 'react';
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

  const truncateText = (text, wordLimit, charLimit) => {
    const words = text.split(' ');

    if (words.length > wordLimit || text.length > charLimit) {
      const truncatedWords = words.slice(0, wordLimit).join(' ');
      const truncatedText = truncatedWords.length > charLimit ? truncatedWords.slice(0, charLimit) : truncatedWords;
      return `${truncatedText}... `;
    }

    return text;
  };

  const contentText = "Beberapa update barang yang mungkin rekomended buat kamu dan tentunya dengan harga dibawah rata-rata.";
  const wordLimit = 16;
  const charLimit = 84;
  const [isTruncated, setIsTruncated] = useState(true);

  const handleReadMore = () => {
    setIsTruncated(false);
  };

  const displayedText = isTruncated ? truncateText(contentText, wordLimit, charLimit) : contentText;
  // batas fungsi hide Text antara menu 2&3
  const shortenText = (text, maxWords, maxChars) => {
    const textArray = text.split(' ');

    if (textArray.length > maxWords || text.length > maxChars) {
      const shortenedTextArray = textArray.slice(0, maxWords).join(' ');
      const finalShortText = shortenedTextArray.length > maxChars ? shortenedTextArray.slice(0, maxChars) : shortenedTextArray;
      return `${finalShortText}... `;
    }

    return text;
  };

  const description = "Kamu ga perlu lagi nih capek-capek cari kesempatan buat ngepet di malam hari karena kami telah menyediakan beberapa loker online yang bisa bikin tetangga kamu mengira kalo kamu sedang ngepet.";
  const maxWords = 17;
  const maxChars = 84;
  const [isShortened, setIsShortened] = useState(true);

  const handleShowMore = () => {
    setIsShortened(false);
  };

  const visibleText = isShortened ? shortenText(description, maxWords, maxChars) : description;


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
        style={{ borderColor: '#fff', borderWidth: '1px' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="https://fauziresume.vercel.app/">
              <img
                src="/img/profile.jpg"
                alt="Profile"
                className="rounded-full w-12 h-12 border-2 border-black shadow-xl"
              />
            </a>
            <div className="-mt-1 leading-none">
              <h1 className="text-lg font-bold text-gray-900 text-left">@fauziiwd</h1>
              <p className="text-gray-100">Web Developer</p>
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
        <div className="flex space-x-4 bg-white bg-opacity-50 backdrop-blur-xl px-5 py-2 rounded-full justify-center"
         style={{ borderColor: '#E2DFD0', borderWidth: '1px' }}>
          <motion.button
            className="px-4 py-2 rounded-lg font-semibold"
            variants={buttonVariants}
            animate={selectedMenu === "menu1" ? "active" : "inactive"}
            onClick={() => setSelectedMenu("menu1")}
          >
            Menu 1
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg font-semibold"
            variants={buttonVariants}
            animate={selectedMenu === "menu2" ? "active" : "inactive"}
            onClick={() => setSelectedMenu("menu2")}
          >
            Menu 2
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg font-semibold"
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
              className="p-4 h-36 bg-white bg-opacity-50 rounded-lg shadow-lg"
              style={{ borderColor: '#F7F5EB', borderWidth: '1px',  }}
            >
              <h2 className="text-xl font-bold">Butuh bantuan?</h2>
              <p className="mt-1">
                Beberapa skill yang bisa kami tawarkan untuk membantu pekerjaan anda dari jarak jauh.</p>
            </motion.div>


            <motion.div
              className=" p-6 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{  }}
            >
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#8E7AB5', borderWidth: '1px' }}
              >
                Web Development
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-green-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#97BE5A', borderWidth: '1px' }}
              >
                Data Entry
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-red-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#B06161', borderWidth: '1px' }}
              >
                Video/Photo Editing
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-purple-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#BA90C6', borderWidth: '1px' }}
              >
                Lain-lain
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
              className="p-4 h-36 overflow-x-auto bg-white bg-opacity-50 rounded-lg shadow-lg"
              style={{ borderColor: '#F7F5EB', borderWidth: '1px',   }}
            >
              <h2 className="text-xl font-bold">Cari barang?</h2>
              <p className="mt-1" style={{  }}>
                {displayedText}
                {isTruncated && (
                  <span
                    onClick={handleReadMore}
                    className="text-pink-600 cursor-pointer"
                  >
                    (selengkapnya)
                  </span>
                )}
              </p>
            </motion.div>


            <motion.div
              className=" p-6 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{  }}
            >
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#8E7AB5', borderWidth: '1px' }}
              >
                Elektronik
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-green-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#97BE5A', borderWidth: '1px' }}
              >
                Fashion
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-red-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#B06161', borderWidth: '1px' }}
              >
                Food & Drink
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-purple-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#BA90C6', borderWidth: '1px' }}
              >
                Lain-lain
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
              className="p-4 h-36 overflow-x-auto bg-white bg-opacity-50 rounded-lg shadow-lg"
              style={{ borderColor: '#F7F5EB', borderWidth: '1px',  }}
            >
              <h2 className="text-xl font-bold">Info Loker?</h2>
              <p>
                {visibleText}
                {isShortened && (
                  <span
                    onClick={handleShowMore}
                    className="text-pink-600 cursor-pointer"
                  >
                    (selengkapnya)
                  </span>
                )}
              </p>
            </motion.div>

            <motion.div
              className=" p-6 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{  }}
            >
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-blue-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#8E7AB5', borderWidth: '1px' }}
              >
                Video Editor
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-green-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#97BE5A', borderWidth: '1px' }}
              >
                Data Entry
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-red-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#B06161', borderWidth: '1px' }}
              >
                Web Developer
              </motion.a>
              <motion.a
                href="#"
                className="block w-full px-4 py-7 text-center text-white bg-purple-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 backdrop-filter backdrop-blur-lg bg-opacity-50"
                variants={item}
                style={{ borderColor: '#BA90C6', borderWidth: '1px' }}
              >
                Offline Part time
              </motion.a>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default App;
