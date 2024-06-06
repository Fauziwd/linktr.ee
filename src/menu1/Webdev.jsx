import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/webdev.css"; // pastikan Anda telah menambahkan font Pallette di sini

const Webdev = () => {
  const [info, setInfo] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [products, setProducts] = useState([]); // State untuk menyimpan produk yang ditampilkan

  const pageVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.4,
    delay: 0.1, // Delay sebelum animasi dimulai
  };
  const fadeInVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const slideDownVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Menggerakkan elemen ke atas sejauh 50 piksel dari posisi awalnya
    },
    visible: {
      opacity: 1,
      y: 0, // Mengembalikan elemen ke posisi awalnya
      transition: {
        duration: 0.5, // Durasi animasi
        type: "spring", // Jenis animasi
        damping: 10, // Damping untuk efek bounces
        stiffness: 100, // Kejelasan animasi
      },
    },
  };

  const fadeInTransition = {
    duration: 0.2,
    delay: 0.2, // Delay sebelum animasi dimulai
  };

  const handleClick = (type) => {
    if (type === "statis") {
      setInfoTitle("Website Statis");
      setInfo(
        "Website statis adalah website yang kontennya tidak dapat diubah oleh pengguna secara langsung menggunakan browser. Konten web statis biasanya terbatas dan tidak memerlukan pembaruan yang sering."
      );
      // Mengatur produk untuk layanan web statis
      setProducts([
        {
          id: 1,
          title: "Produk 1 - Landing Page",
          description: "Naikkan omzet bulananmu dengan menggiring pelanggan agar mau mampir ke web usahamu.",
          price: "$100",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 2,
          title: "Produk 2 - Web Portfolio",
          description: "Bingung bikin portfolio online? Sini aku bantu!",
          price: "$200",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 3,
          title: "Produk 3 - Company Profile",
          description: "Kenalkan pada dunia bahwa perusahaan anda adalah salah satu yang terbaik!",
          price: "$300",
          image: "https://via.placeholder.com/300",
        },
      ]);
    } else if (type === "dinamis") {
      setInfoTitle("Website Dinamis");
      setInfo(
        "Website dinamis adalah situs web yang isinya dapat berubah sesuai dengan interaksi pengguna."
      );
      // Mengatur produk untuk layanan web dinamis
      setProducts([
        {
          id: 1,
          title: "Produk 1 - Web Dinamis",
          description: "Deskripsi Produk 1 untuk Web Dinamis",
          price: "$400",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 2,
          title: "Produk 2 - Web Dinamis",
          description: "Deskripsi Produk 2 untuk Web Dinamis",
          price: "$500",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 3,
          title: "Produk 3 - Web Dinamis",
          description: "Deskripsi Produk 3 untuk Web Dinamis",
          price: "$600",
          image: "https://via.placeholder.com/300",
        },
      ]);
    }
    setShowInfo(true); // Menampilkan div info saat tombol diklik
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex flex-col relative">
      <motion.header
        className="bg-primary text-secondary py-10 rounded-b-lg fixed top-0 inset-x-0 z-10"
        style={{
          borderBottom: "4px solid #000",
        }}
        initial="initial"
        animate="animate"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1 className="text-4xl font-bold text-center">Cari Jasa Bikin Web?</h1>
        <p className="text-center mt-3 text-xl">
          Kami solusinya! Silakan pilih opsi web yang sesuai dengan kebutuhan
          Anda
        </p>
      </motion.header>

      <div className="fixed inset-x-0 top-40 mx-auto w-11/12 z-10">
        <motion.div
          className="bg-secondary h-24 flex flex-col items-center justify-center rounded-lg shadow-lg space-y-2 px-6 py-5 retro-border"
          variants={fadeInVariants}
          transition={fadeInTransition}
          initial="initial"
          animate="animate"
        >
          <div className="flex space-x-4">
            <motion.button
              className="px-7 py-4 rounded-sm font-semibold retro-button"
              onClick={() => handleClick("statis")}
              style={{
                borderColor: "#000",
                borderWidth: "1px",
                zIndex: "10",
                position: "relative",
              }}
            >
              Web Statis
            </motion.button>
            <motion.button
              className="px-7 py-4 rounded-sm font-semibold retro-button"
              onClick={() => handleClick("dinamis")}
              style={{
                borderColor: "#000",
                borderWidth: "1px",
                zIndex: "10",
                position: "relative",
              }}
            >
              Web Dinamis
            </motion.button>
          </div>
        </motion.div>
        {showInfo && (
          <motion.div
            className="mt-4 bg-secondary p-6 h-36 overflow-y-scroll rounded-lg shadow-lg retro-border"
            style={{ fontFamily: "Pallette" }}
            variants={slideDownVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-3">
              <h2 className="font-bold text-2xl mb-1">{infoTitle}</h2>
              <p>{info}</p>
            </div>
          </motion.div>
        )}
        <div className="container mx-auto p-4 flex-grow mt-4 overflow-y-auto">
  <div className="flex overflow-x-auto space-x-4 h-64">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white border-green-800 border-2 rounded-lg shadow-lg overflow-x-auto flex-shrink-0 w-64"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 overflow-y-scroll"> {/* Tambahkan overflow-y-scroll di sini */}
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
          <p className="text-lg font-semibold mb-2">
            Harga: {product.price}
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 w-full">
            Pesan Sekarang
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      <footer
        className="bg-primary text-secondary py-4 w-full fixed bottom-0 inset-x-0 z-10"
        style={{
          borderTop: "4px solid #000",
        }}
      >
        <p className="text-center">
          Kontak kami untuk konsultasi lebih lanjut:{" "}
          <a
            href="mailto:email@marketplace.com"
            className="text-secondary hover:text-primary"
          >
            email@marketplace.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Webdev;
