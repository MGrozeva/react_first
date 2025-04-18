import React from 'react';

const Gallery = () => {
  const galleryStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  const galeriaStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1em",
    marginTop: "4em",
  };

  const imageStyle = {
    width: "500px",
    height: "400px",
    objectFit: "cover",
  };
  return (
    <section className="Gallery"  style={galleryStyle}>
      <section className="galeria" style={galeriaStyle}>
        <img src="images/Seal1.png" alt="" style={imageStyle}/>
      </section>
      <section className="galeria" style={galeriaStyle}>
        <img src="images/Seal2.png" alt="" style={imageStyle}/>
      </section>
      <section className="galeria" style={galeriaStyle}>
        <img src="images/Seal3.png" alt="" style={imageStyle}/>
      </section>
      <section className="galeria"  style={galeriaStyle}>
        <img src="images/Seal4.png" alt="" style={imageStyle}/>
      </section>
      <section className="galeria" style={galeriaStyle}>
        <img src="images/Seal5.png" alt="" style={imageStyle}/>
      </section>
      <section className="galeria" style={galeriaStyle}>
        <img src="images/chase2.png" alt="" style={imageStyle}/>
      </section>
    </section>
  );
};

export default Gallery;