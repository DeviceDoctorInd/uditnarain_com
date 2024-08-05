import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// const images = [
//   "https://assets.codepen.io/1506195/unsplash-1.jpg",
//   "https://assets.codepen.io/1506195/unsplash-7.jpg",
//   "https://assets.codepen.io/1506195/unsplash-3.jpg",
//   "https://assets.codepen.io/1506195/unsplash-2.jpg",
//   "https://assets.codepen.io/1506195/unsplash-6.jpg",
//   "https://assets.codepen.io/1506195/unsplash-0.jpg",
//   "https://assets.codepen.io/1506195/unsplash-8.jpg",
//   "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600"
// ];

const images = new Array(15).fill(null).map((_, index) => `https://backend.uditnarain.com/banner/about${index + 1}.jpg`);

const galleryVariants = {
  initial: { opacity: 0, scale: 0.8, x: 100 },
  animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, scale: 0.8, x: -100, transition: { duration: 1 } }
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numImages, setNumImages] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + numImages) % images.length);
      setNumImages(Math.floor(Math.random() * 3) + 1); // Randomly show 1 to 3 images
    }, 3000);
    return () => clearInterval(interval);
  }, [numImages]);

  const currentImages = images.slice(currentIndex, currentIndex + numImages);

  return (
    <div style={styles.gallery(numImages)}>
      <AnimatePresence>
        {currentImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${currentIndex + index + 1}`}
            variants={galleryVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={styles.image}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const getGalleryStyles = (numImages) => {
  let gridTemplateAreas;
  switch (numImages) {
    case 1:
      gridTemplateAreas = `
        "a"
      `;
      break;
    case 2:
      gridTemplateAreas = `
        "a b"
      `;
      break;
    case 3:
      gridTemplateAreas = `
        "a b"
        "c c"
      `;
      break;
    default:
      gridTemplateAreas = `
        "a b"
        "c d"
      `;
  }
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas: gridTemplateAreas,
    gap: '10px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // width: 'min(90vmin, 450px)',
    height: 'auto',
    // border:'2px solid red'
  };
};

const styles = {
  gallery: (numImages) => getGalleryStyles(numImages),
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default Gallery;
