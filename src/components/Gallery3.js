import React, { useEffect, useState } from "react";

const Gallery3 = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch gallery images from the JSON server
    fetch("http://localhost:5000/galleryImages")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching gallery images:", error));
  }, []);
  useEffect(() => {
    // Update images every 10 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 10000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images]);

  // Get the three images to display
  const displayedImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="gallery3">
      {displayedImages.map((image, index) => (
        <div key={image.id} className="gallery-item3">
          <img src={image.url} alt={`Gallery Image ${index + 1}`} className="gallery-image3" />
        </div>
      ))}
    </div>
  );
};

export default Gallery3;