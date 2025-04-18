import React from 'react';

const Content = () => {
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
      <h2 className="legitimacy" style={headingStyle}>The Plastic Crisis</h2>
      <p className="info" style={infoStyle}>Plastic waste, especially single-use plastics like bottles, bags, and packaging, is being discarded in vast quantities, often ending up in landfills, rivers, and oceans. This pollution poses a severe threat to ecosystems and natural habitats. Marine animals including seabirds, fish, turtles, and many other marine mammals, can mistake plastic for food or become entangled in it.
            Ingesting plastic leads to injuries, blockages, and starvation.  Animals suffer from injuries and reduced mobility when tangled in plastic debris. It is estimated that we will have more plastic than fish in the oceans by 2050!</p>          
      <h2 className="call-to-action"  style={headingStyle}>Our Mission</h2>
      <p className="info"  style={infoStyle}>
      Namibia has a healthy Cape Fur Seal population of more than one million individuals all along its coast. These seals are exposed to illegally abandoned fishing gear and other marine debris. Since 2013, the OCN team has rescued over 3500 entangled seals from certain death. Through direct action, exposure and education, OCN hopes to motivate individuals all over the world to change their own behaviour towards a sustainable future.
            Please join us and our 3 million subscribers on social media and follow OCN's daily seal rescue videos on Youtube, TikTok and other platforms. Each view, comment and share creates more awareness for our marine animals' dire situation and the debilitating condition of our world oceans.</p>        
        
      
    
    </section>     
  );
};

export default Content;