import React from 'react';
const Donation = () => {


    const buttonStyles = (imageUrl) => ({
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '250px',
        height: '250px',        
        cursor: 'pointer',
        borderRadius: '100%',
        border: '2px solid black',       
        
      });
    return(

    <section className="donat" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
      {/* PayPal Donation */}
      <section className="type">
        <form action="https://www.ocnamibia.org/donate" method="get" target="_blank">
          <button 
            style={buttonStyles('https://i.insider.com/6344639387b7ea001851dc69?width=1136&format=jpeg')}
            aria-label="Donate with PayPal"
          ></button>
        </form>
      </section>

      {/* Stripe Donation */}
      <section className="type">
        <form action="https://www.ocnamibia.org/donate" method="get" target="_blank">
          <button 
            style={buttonStyles('/images/stripe.png')}
            aria-label="Donate with Stripe"
          ></button>
        </form>
      </section>

      {/* Vimeo Donation */}
      <section className="type">
        <form action="https://www.patreon.com/OCN?redirect=true" method="get" target="_blank">
          <button 
            style={buttonStyles('https://static.wixstatic.com/media/448d67_8b1f345bd4624e1ab3930cb4c6d05145~mv2.jpg/v1/crop/x_125,y_170,w_909,h_908/fill/w_139,h_139,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/CTL_Logo.jpg')}
            aria-label="Watch Cutting the Line"
          ></button>
        </form>
      </section>
    </section>
    );

};
export default Donation;