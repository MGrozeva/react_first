import React from 'react';

const Contribution = () => {
  const headingStyle = {
    margin: "0 1em 1.5em 1em",
    textAlign: "center",
    flexBasis: "100%",
    marginTop: "3em",
    fontFamily: '"Calibri", sans-serif',
    fontSize: "2em",
  };

  const infoStyle = {
    margin: "0 5em 2em 5em",
    textAlign: "center",
    flexBasis: "100%",
    fontSize: "2em",
  };
  return (
    <section className="content">
      <h2 className="legitimacy" style={headingStyle}>THANK YOU FOR YOUR CONTRIBUTION</h2>
      <p className="info" style={infoStyle}>Ocean Conservation Namibia is registered as a charitable trust with the Namibian High Court since 2020. OCN does not receive any help from the local government, all seal rescues are funded through private donations from all over the world and the sales of merchandise. Donations for OCN are collected through US based non -profit entity Ocean Conservation International, registered under chapter 501(c)3 as non profit organisations.</p>          
      
    </section>     
  );
};

export default Contribution;