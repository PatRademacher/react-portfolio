import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from './resume_picpic.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import backgroundVid from './backgroundVideo.mp4';
import '@fortawesome/fontawesome-free/css/all.min.css';
import headshot from './headshot0.jpg';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = { windowWidth: 0,//window.innerWidth, 
                       windowHeight: 0,//window.innerHeight,
                       pictureWidth: Math.round((window.innerWidth/7.6)),
                       pictureHeight: Math.round((window.innerHeight/3.3)),
                       counter: 0};
    }
    reportWindowSize = () => {
        console.log('WW: ' + this.state.windowWidth);
        console.log('IH: ' + this.state.pictureHeight);
        console.log('PW: ' + this.state.pictureWidth)
        this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight, pictureWidth: (Math.round((window.innerWidth/7.6))), pictureHeight: Math.round((window.innerHeight/2.8))})
      }

      

      
    render() {
        window.addEventListener('resize', this.reportWindowSize);
        

        return(
            <div className="landing-grid">
            <video className='videoTag' autoPlay loop muted>
                <source src={backgroundVid} type='video/mp4' />
            </video>
                <Row style={{height: '2.8vh'}} />
                    <Row style={{alignItems: 'flex-start', display: 'flex', justifyContent: 'center'}}>
                        <Col />
                        <Col xs = {6} style = {{justifyContent: 'center'}}>
                            <img src = {headshot} style ={{borderRadius: '100%', border: 'solid #ccc 2px', width: '290px', margin: 'auto', position: 'sticky'}}></img>
                        </Col>
                        <Col />
                    </Row>
                    <Row style={{height: '57vh', alignItems: 'flex-end', bottom: '0', paddingTop: '2vh', position: 'fixed', width: '100%', display: 'flex'}}>
                        
                            <Col />
                            <Col className="banner-text" xs={10} sm={10} md={10} lg={10} xl={10}>
                                
                                    <h1>Patrick Rademacher: 
                                        <br></br>
                                    </h1>  
                                    <h2>
                                        Master of Science in Computer Science
                                    </h2>
                                    <div style={{alignContent: 'space-between'}}>
                                        <hr />
                                        <Row>
                                            
                                            <Col xs={6} style={{textAlign: 'center'}}>
                                                <p>Python | C | C++ | Javascript | Java | Haskell | SQL</p>
                                            </Col>
                                            <Col xs={6} style={{textAlign: 'center'}}>
                                                <p>HTML/CSS | React | Bootstrap | RestFUL API | Node.js</p>
                                            </Col>
                                        
                                        </Row>
                                        <hr />
                                        </div>

                                {/*Github */}
                                <div className='social-links'>
                                    
                                        <a href="https://www.github.com/patrademacher" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        {/*Linked In */}
                                        <a href="https://www.linkedin.com/in/patrick-rademacher-1844221b8/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>

                                        
                               
                                </div>
                                <div style={{height: '3px'}} />
                            </Col>
                            <Col />
                            
                        

                    </Row>
                    
                        
                        
                        
                
                    </div>
                            

                       
                    
        )
    }
}

export default LandingPage;