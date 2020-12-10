import React, { useState, useEffect } from "react";
import sparty from "./sparty.png";
import {Grid, Cell} from "react-mdl";
import backgroundVid from "./backgroundVideo.mp4";
function AboutMe() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const renderContent = () => (
    <>
  
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Closure</h1>
        <h2 className="Parallax__content__heading__caption">
          Your one-stop source of Web Development tricks
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
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
      
      <div className="Parallax__content">{renderContent()}</div>
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
      
      <div className="Parallax__content">{renderContent()}</div>
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
      <div className="Parallax__content">{renderContent()}</div>
      </section>
      </div>  
    
    
    
  );
}

export default AboutMe;
