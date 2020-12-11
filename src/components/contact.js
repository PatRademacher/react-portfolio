import React from 'react';
import axios from 'axios';
import beluga from './belugaMedium.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: null, email: null, message: null})
  }
  
  render() {
    return(
      <div style={{backgroundImage: `url(${beluga})`, backgroundSize: 'cover', backgroundPosition: 'center center', display: 'flex', justifyContent:'center', height:'1122px', repeat: 'no-repeat', alignItems: 'center'}}>
    <Row style={{width: '59%', padding: '8px'}}>
      <Col className='contact-grid'  sm={4} style={{padding: '3px', opacity: '.4'}} >
      <h3 icon='user' style={{borderBottom: 'dotted black 6px', fontFamily: "'Fredoka One'", fontSize: '1.77vw', textAlign: 'center'}}>Patrick Rademacher</h3>
      
      <List>
      <ListItem>
                                <ListItemContent style={{fontFamily: "'Fredoka One'", fontSize: '.801vw', textAlign: 'center'}}>
                                  <Row style={{alignItems: 'baseline'}}>
                                    <Col sm={1}>
                                        <i className= "fas fa-phone-alt fa-2x" aria-hidden="true"/>
                                    </Col>
                                    <Col sm={9}>         (616) 826-3296
                                    </Col>
                                    </Row>    
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                <ListItemContent style={{fontFamily: "'Fredoka One'", fontSize: '.801vw', textAlign: 'center'}}>
                                  <Row style={{alignItems: 'baseline'}}>
                                    <Col sm={1}>
                                        <i className= "fa fa-envelope fa-2x" aria-hidden="true"/>
                                    </Col>
                                    <Col sm={8}>          patrick.d.rad@gmail.com
                                    </Col>
                                    </Row>    
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} />
                                </ListItem>
                            </List>
                            </Col>
      <Col className='contact-grid' sm={8} style={{opacity: '.73'}}>
    <MDBContainer>
        <form onSubmit={this.handleSubmit.bind(this)} method="POST">
        <p>Contact Me: Use My Form</p>
        <div>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
            <Col sm = {10}>
              
                <Row style={{alignItems: 'baseline'}}>
                  <Col sm={1}>
                  <i class="fas fa-user fa-2x"></i>                </Col>
                <Col sm={1} />
                <Col sm={10}>
                <MDBInput label="Your name" group type="text" validate error="wrong"
            success="right" />
            </Col>
            </Row>
            </Col>
            </Row>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
            <Col sm = {10}>
              
                <Row style={{alignItems: 'baseline'}}>
                  <Col sm={1}>
                <i className="fa fa-envelope fa-2x" style={{width: '100%'}} />
                </Col>
                <Col sm={1} />
                <Col sm={10}>
                <MDBInput label="Your email" group type="text" validate error="wrong"
            success="right" />
            </Col>
            </Row>
       
            
            </Col>
            </Row>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
            <Col sm = {10}>
              
                <Row style={{alignItems: 'baseline'}}>
                  <Col sm={1}>
                <i className="fa fa-pencil-alt fa-2x" style={{width: '100%'}} />
                </Col>
                <Col sm={1} />
                <Col sm={10}>
                <MDBInput label="Your message" group type="textarea" rows="5" validate error="wrong"
            success="right" />
            </Col>
            </Row>
       
            
            </Col>
            </Row>
        </div>
        <div className="text-center">
          <MDBBtn style={{color: '#ab20fd', border: 'solid #ab20fd 1px'}}>
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" style={{color: '#ab20fd'}} />
          </MDBBtn>
        </div>
      </form>
</MDBContainer>
</Col>
</Row>
        </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;