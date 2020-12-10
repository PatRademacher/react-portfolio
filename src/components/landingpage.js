import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from './resume_picpic.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import backgroundVid from './backgroundVideo.mp4';
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
                <div className="separator"></div>
                <Container fluid="md" className="containers">
                    <Row>
                        <Col />
                        <Col xs = {6}>
                            {(this.state.windowWidth === window.innerWidth) && (this.state.windowHeight === window.innerHeight) && (this.state.pictureHeight < 266) && (this.state.pictureWidth < 163) ? <img src={pic} className="avatar-img" alt="avatar" style={{width: this.state.pictureWidth, height: this.state.pictureHeight}} ></img> : <p>SORRY CHARLIE</p> }
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        
                            <Col />
                            <Col className="banner-text" xs={8} style={{height: this.state.pictureHeight}}>
                                
                                    <h1>PATRICK RADEMACHER: 
                                        <br></br>
                                        Full Stack Web Developer
                                    </h1>  
                                    <hr />
                                    <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
                                    <div className="social-links">

                                {/*Github */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github-square"></i>
                                </a>
                                {/*Linked In */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-square"  aria-hidden="true" />
                                </a>

                            </div>
                            </Col>
                            <Col />
                            
                        

                    </Row>
                    
                </Container>
                        
                        
                        
                
                    </div>
                            

                       
                    
        )
    }
}

export default LandingPage;