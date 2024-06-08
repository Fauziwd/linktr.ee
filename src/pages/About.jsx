import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.blurredOverlay}></div>
      <div style={styles.content}>
        <h1>Contoh Konten</h1>
        <p>Ini adalah contoh konten dengan latar belakang blur.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  blurredOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/path/to/your/image.jpg)', // Ganti dengan path gambar Anda
    backgroundSize: 'cover',
    filter: 'blur(20px)', // Menambahkan efek blur
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    textAlign: 'center',
    paddingTop: '20vh',
  }
};

export default About;
