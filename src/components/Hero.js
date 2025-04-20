import React, { useEffect, useState } from "react";

const Hero = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch images from JSON server
    fetch("http://localhost:5000/heroImages")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching hero images:", error));
  }, []);

  useEffect(() => {
    // Rotate images every 8 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images]);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImageIndex]?.url || ""})`,
      }}
    >
      <p className="herotext">4000 Seals Rescued from Plastic Rubbish</p>
      {images.length === 0 && <p>Loading...</p>}
    </div>
  );
};

export default Hero;