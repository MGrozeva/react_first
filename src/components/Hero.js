import React from 'react';

const Hero = () => {

  const heroStyle = {
    width: "100%",
    backgroundImage: "url('/images/chase.png')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15% 15% 10% 15%",
    fontFamily: '"Calibri", sans-serif',
    textAlign: "center",
    color: "#fff",
    textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
    fontSize: "5em",
  };
  return (
    <section style={heroStyle}>
      <div style={textStyle}>
        <p>3500 Seals Rescued from Plastic Rubbish</p>
      </div>
    </section>
  );
};

export default Hero;