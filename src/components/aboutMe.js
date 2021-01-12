import React, { useState, useEffect } from "react";
import sparty from "./sparty.png";
import {Grid, Cell} from "react-mdl";
import backgroundVid from "./backgroundVideo.mp4";
import headshot from "./headshot2.jpg";
function AboutMe() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const renderContent0 = () => (
    <>
  
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">About Me</h1>
        
      </div>
      <div className="Parallax__content__cta">
        <p style={{fontSize: '1.53rem', lineHeight: '100%'}}>
          Hello, my name is Patrick Rademacher, and welcome to my online portfolio! Recently, I graduated with a master's in computer science from Portland State University. I'm mainly interested in data science, machine learning, artificial intelligence, digital signal processing, front-end web development, and software engineering. I aim to find a position rooted within one of these domains (or something similar) through a company or workplace that values a strong work ethic, clear and open communication, and an open-minded approach to working with others to solve problems. 
        </p>
          <img style={{width: '100%'}} src={headshot}>
        </img>
      </div>
    </>
  );

  const renderContent1 = () => (
    <>
  
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Background in Teaching</h1>
      </div>
      <div className="Parallax__content__cta">
        <p style={{fontSize: '1.53rem', lineHeight: '100%'}}>
          I completed my bachelor's degree in English at Michigan State University back in 2013 with a focus in secondary education. The following year I completed a year-long internship teaching freshman and sophomore level English at Lowell High School in Michigan. I now hold teaching certificates for secondary English Language Arts in both Michigan and Oregon. Although I ended up pursuing a different path than intended, my background as an educator has provided me with skillsets that still come in handy even within the CS world, such as: thorough and organized planning; strong and engaging presentations skills; an ability to be quick and adapt when things don't go as planned; and, perhaps most obviously yet most importantly, teaching and explaining concepts to students with various learning styles and who come from different backgrounds too. 
        </p>
      </div>
    </>
  );

  const renderContent2 = () => (
    <>
  
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">My Side Gig</h1>
        <h2 className="Parallax__content__heading__caption">
          Your one-stop source of Web Development tricks
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p style={{fontSize: '1.53rem', lineHeight: '100%'}}>
          In addition to programming and teaching, I also have a love and passion for music and playing guitar. I'll throw up some videos and links to my stuff in the near future!
        </p>
      </div>
    </>
  );

  return (
      <div>
      <video className='videoTag' style={{zIndex: '-4'}} autoPlay loop muted>
            <source src={backgroundVid} type='video/mp4' />
      </video>
      <Grid >
        <Cell col={12}>
      <section className="Parallax">
      <div
        className="Parallax__background-main"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        
      />
      
      <div className="Parallax__content">{renderContent0()}</div>
      </section>
      </Cell>
      </Grid>
      <section className="Parallax" style={{marginTop: '700px'}} />
      <Grid >
        <Cell col={12}>
      <section className="Parallax">
      <div
        className="Parallax__background-michiganstate"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        
      />
      <div className="Parallax__background-michiganstateSparty">
        <img className="Parallax__background-michiganstateSpartyRun" src={sparty} style={{width: '10%'}} />
      </div>
      
      <div className="Parallax__content">{renderContent1()}</div>
      </section>
      </Cell>
      </Grid>
      <section className="Parallax" style={{marginTop: '1000px'}} />
    <section className="Parallax">
      <div
        className="Parallax__background-guitar"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        
      />
      <div
        className="Parallax__background-guitar-notes"
        style={{ transform: `translateY(${offsetY * 0.8}px)`, filter: 'invert(87%) sepia(92%) saturate(987%) hue-rotate(81deg) brightness(97%) contrast(95%)' }}
      />
      <div className="Parallax__content">{renderContent2()}</div>
      </section>
      </div>  
    
    
    
  );
}

export default AboutMe;
