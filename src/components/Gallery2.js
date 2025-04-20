import React from 'react';


const Gallery2 = () => {
    const reels = [
        "https://www.instagram.com/reel/DH8lYkAMN6g/",
        "https://www.instagram.com/reel/DH6AwAgPKeK/",
        "https://www.instagram.com/reel/DIq7u93Pn3W/",
        "https://www.instagram.com/reel/DIlyMlboYuR/",
        "https://www.instagram.com/reel/DIgoqwbPQPi/",
        "https://www.instagram.com/reel/DIbe-N4B2fP/"
    ];
 
  return (
    <section className="gallery"  >
        {reels.map((reel, index) => (
      <section className="galeria" key={index}>
        <iframe
            className="embed-reel"
            src={`${reel}embed`}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            title={`Instagram Reel ${index + 1}`}
          ></iframe>
        </section>
        ))}
    </section>
  );
};

export default Gallery2;