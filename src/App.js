import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const App = () => {
  const { scrollYProgress } = useViewportScroll();
  const [selectedMenu, setSelectedMenu] = useState("menu1");
  const [leftPosition, setLeftPosition] = useState('calc(3% + 2.5px)');
  const [width, setWidth] = useState('60px');

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

  useEffect(() => {
    const calculatePositionAndWidth = () => {
      switch (selectedMenu) {
        case "menu1":
          return { left: 'calc(3% + 2.5px)', width: '90px' }; // Adjust this value based on the width and spacing of the buttons
        case "menu2":
          return { left: 'calc(5% + 100px)', width: '92px' }; // Adjust this value based on the width and spacing of the buttons
        case "menu3":
          return { left: 'calc(3% + 215px)', width: '93px' }; // Adjust this value based on the width and spacing of the buttons
        default:
          return { left: 'calc(5% + 6px)', width: '120px' };
      }
    };

    const { left, width } = calculatePositionAndWidth();
    setLeftPosition(left);
    setWidth(width);
  }, [selectedMenu]);


  const buttonVariants2 = {
    active: { backgroundColor: 'rgba(255, 255, 255, 0)', color: '#1A2130' },
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Warna latar belakang saat tombol tidak aktif dengan opasitas 50%
      color: "#686D76", // Warna teks saat tombol tidak aktif
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
    <div className="min-h-screen flex flex-col bg-white p-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>

      <div className="relative">
        {/* Navbar */}
        <motion.nav
          className="bg-white p-6 w-full max-w-md md:max-w-lg lg:max-w-xl text-center mb-4 mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          style={{ borderColor: '#000', borderWidth: '1px', zIndex: 10, position: 'relative' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a href="https://fauziresume.vercel.app/">
                <img
                  src="/img/profile.jpg"
                  alt="Profile"
                  className="rounded-full w-12 h-12 border-2 border-black"
                />
              </a>
              <div className="-mt-1 leading-none">
                <h1 className="text-lg font-bold text-gray-900 text-left">@fauziiwd</h1>
                <p className="text-gray-700">Creative Enthusiast</p>
              </div>
            </div>
          </div>
        </motion.nav>
        <motion.div
          className="absolute w-full max-w-md md:max-w-lg lg:max-w-xl h-24"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          style={{ top: 'calc(100% - 112px)', left: 'calc(1% + 3px)', backgroundColor: '#F9ECCA', borderColor: '#000', borderWidth: '1px', zIndex: 1 }}
        >
          {/* Div content here */}
        </motion.div>
      </div>
      {/* Batas Navbar  */}

      {/* Opsi Menu  */}
      <div className="flex justify-center items-center mb-8 mt-3">

        <div className="relative">
          <div className="flex space-x-4 bg-white px-6 py-5 justify-center"
            style={{ borderColor: '#000', borderWidth: '1px', zIndex: 10, position: 'relative' }}>
            <motion.button
              className="px-3 py-2 rounded-sm font-semibold"
              variants={buttonVariants2}
              animate={selectedMenu === "menu1" ? "active" : "inactive"}
              onClick={() => setSelectedMenu("menu1")}
              style={{ borderColor: '#000', borderWidth: '1px', zIndex: '10', position: 'relative' }}
            >
              Menu 1
            </motion.button>
            <motion.button
              className="px-3 py-2 rounded-sm font-semibold"
              variants={buttonVariants2}
              animate={selectedMenu === "menu2" ? "active" : "inactive"}
              onClick={() => setSelectedMenu("menu2")}
              style={{ borderColor: '#000', borderWidth: '1px', zIndex: '10', position: 'relative' }}
            >
              Menu 2
            </motion.button>
            <motion.button
              className="px-3 py-2 rounded-sm font-semibold"
              variants={buttonVariants2}
              animate={selectedMenu === "menu3" ? "active" : "inactive"}
              onClick={() => setSelectedMenu("menu3")}
              style={{ borderColor: '#000', borderWidth: '1px', zIndex: '10', position: 'relative' }}
            >
              Menu 3
            </motion.button>


            <motion.div
              className="absolute rounded-sm h-10"
              style={{ top: 'calc(100% - 60px)', backgroundColor: '#BBFAF6' }}
              animate={{ left: leftPosition, width: width }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
            </motion.div>
          </div>

          {/* Shadow Retronya disini */}
          <motion.div
            className="absolute w-full max-w-md md:max-w-lg lg:max-w-xl h-20"
            style={{ top: 'calc(100% - 76px)', left: 'calc(1% + 3px)', backgroundColor: '#F9ECCA', borderColor: '#000', borderWidth: '1px' }}
          >
            {/* Div content here */}
          </motion.div>
        </div>
      </div>
      {/* Batas opsi menu  */}


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
              style={{ borderColor: '#1A2130', borderWidth: '1px', }}
            >
              <h2 className="text-xl font-bold">Butuh bantuan?</h2>
              <p className="mt-1">
                Beberapa skill yang bisa kami tawarkan untuk membantu pekerjaan anda dari jarak jauh.</p>
            </motion.div>




            <motion.div
              className="p-1 mt-3 grid grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* ------------------------------------------- */}
              <div className="relative">
                <motion.div
                  className="absolute w-full max-w-md md:max-w-lg lg:max-w-xl h-24"
                  style={{ top: 'calc(100% - 95px)', left: 'calc(1% + 5px)', backgroundColor: '#E1ACAC' }}
                ></motion.div>
                <motion.a
                  href="/web-developer"
                  className=" w-full h-24 text-center text-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 relative z-10 flex flex-col justify-center items-center"
                  variants={item}
                  style={{ borderColor: '#000', borderWidth: '1px' }}
                >
                  <img src="/img/webdev.png" alt="" className="w-12 h-12 object-cover" />
                  <span>Website</span>
                </motion.a>
              </div>


              {/* ---------------------------------------- */}

              {/* ------------------------------------------- */}
              <div className="relative">
              <motion.a
                  href="/web-developer"
                  className=" w-full h-24 text-center text-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 relative z-10 flex flex-col justify-center items-center"
                  variants={item}
                  style={{ borderColor: '#000', borderWidth: '1px' }}
                >
                  <img src="/img/writing.png" alt="" className="w-auto h-12 object-cover" />
                  <span>Writing</span>
                </motion.a>
                <motion.div
                  className="absolute w-full max-w-md md:max-w-lg lg:max-w-xl h-24"
                  style={{ top: 'calc(100% - 95px)', left: 'calc(1% + 5px)', backgroundColor: '#B5C18E' }}>
                </motion.div>
              </div>
              {/* ---------------------------------------- */}

              {/* ------------------------------------------- */}
              <div className="relative">
              <motion.a
                  href="/web-developer"
                  className=" w-full h-24 text-center text-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 relative z-10 flex flex-col justify-center items-center"
                  variants={item}
                  style={{ borderColor: '#000', borderWidth: '1px' }}
                >
                  <img src="/img/editing.png" alt="" className="w-auto h-12 object-cover" />
                  <span>Editing</span>
                </motion.a>
                <motion.div
                  className="absolute w-full max-w-md md:max-w-lg lg:max-w-xl h-24"
                  style={{ top: 'calc(100% - 95px)', left: 'calc(1% + 5px)', backgroundColor: '#ECCA9C' }}>
                </motion.div>
              </div>
              {/* ---------------------------------------- */}

              {/* ------------------------------------------- */}
              <div className="relative">
              <motion.a
                  href="/web-developer"
                  className=" w-full h-24 text-center text-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 relative z-10 flex flex-col justify-center items-center"
                  variants={item}
                  style={{ borderColor: '#000', borderWidth: '1px' }}
                >
                  <img src="/img/searching.png" alt="" className="w-auto h-12 object-cover" />
                  <span>Search</span>
                </motion.a>
                <motion.div
                  className="absolute w-full max-w-md md:max-w-lg lg:max-w-xl h-24"
                  style={{ top: 'calc(100% - 95px)', left: 'calc(1% + 5px)', backgroundColor: '#AD88C6' }}>
                </motion.div>
              </div>
              {/* ---------------------------------------- */}

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
              style={{ borderColor: '#1A2130', borderWidth: '1px', }}
            >
              <h2 className="text-xl font-bold">Cari barang?</h2>
              <p className="mt-1" style={{}}>
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
              className=" p-2 mt-3 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{}}
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
              style={{ borderColor: '#1A2130', borderWidth: '1px', }}
            >
              <h2 className="text-xl font-bold">Info Loker?</h2>
              <p>
                {visibleText}
                {isShortened && (
                  <span
                    onClick={handleShowMore}
                    className="mt-3 text-pink-600 cursor-pointer"
                  >
                    (selengkapnya)
                  </span>
                )}
              </p>
            </motion.div>

            <motion.div
              className=" p-2 mt-3 overflow-y-auto space-y-4 flex flex-col items-center justify-center overflow-x-auto"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{}}
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
