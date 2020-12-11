import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import pic0 from "./aiMedium.jpg";
import pic1 from "./machinelearningMedium.jpg";
import pic2 from "./databasesMedium.jpg";
import pic3 from "./internetMedium.jpg";
import pic4 from "./puredataMedium.jpg";
import pic5 from "./softwareengineeringMedium.jpg";
import pic6 from "./functionalprogrammingMedium.png";
import pic7 from "./frontendMedium.jpg";
import pic8 from "./fractalMedium.jpg";
import pic12 from "./algorithmsMedium.jpg";
import pic13 from "./theorycompMedium.jpg";
import pic14 from "./quantumMedium.jpg";
import pic9 from "./opensourceMedium.jpg";
import pic10 from "./numcompMedium.jpg";
import pic11 from "./modelingMedium.jpg";

import ArtificalIntelligenceMain from "./projectPages/ArtificialIntelligence/ArtificialIntelligenceMain";
import ArtificialIntelligenceProject0 from "./projectPages/ArtificialIntelligence/ArtificialIntelligenceProject0";
import ArtificialIntelligenceProject1 from "./projectPages/ArtificialIntelligence/ArtificialIntelligenceProject1";
import ArtificialIntelligenceProject2 from "./projectPages/ArtificialIntelligence/ArtificialIntelligenceProject2";
import MachineLearningMain from "./projectPages/MachineLearning/MachineLearningMain";
import MachineLearningProject0 from "./projectPages/MachineLearning/MachineLearningProject0";
import MachineLearningProject1 from "./projectPages/MachineLearning/MachineLearningProject1";
import MachineLearningProject2 from "./projectPages/MachineLearning/MachineLearningProject2";
import DatabasesMain from "./projectPages/Databases/DatabasesMain";
import DatabasesProject0 from "./projectPages/Databases/DatabasesProject0";
import InternetworkingProtocolsMain from "./projectPages/InternetworkingProtocols/InternetworkingProtocolsMain";
import InternetworkingProtocolsProject0 from "./projectPages/InternetworkingProtocols/InternetworkingProtocolsProject0";
import MusicAndDigitalSignalProcessingMain from "./projectPages/MusicAndDigitalSignalProcessing/MusicAndDigitalSignalProcessingMain";
import MusicAndDigitalSignalProcessingProject0 from "./projectPages/MusicAndDigitalSignalProcessing/MusicAndDigitalSignalProcessingProject0";
import MusicAndDigitalSignalProcessingProject1 from "./projectPages/MusicAndDigitalSignalProcessing/MusicAndDigitalSignalProcessingProject1";
import SoftwareEngineeringMain from "./projectPages/SoftwareEngineering/SoftwareEngineeringMain";
import SoftwareEngineeringProject0 from "./projectPages/SoftwareEngineering/SoftwareEngineeringProject0";
import FunctionalProgrammingMain from "./projectPages/FunctionalProgramming/FunctionalProgrammingMain";
import FunctionalProgrammingProject0 from "./projectPages/FunctionalProgramming/FunctionalProgrammingProject0";
import FrontEndWebDevelopmentMain from "./projectPages/FrontEndWebDevelopment/FrontEndWebDevelopmentMain";
import FrontEndWebDevelopmentProject0 from "./projectPages/FrontEndWebDevelopment/FrontEndWebDevelopmentProject0";
import FractalsMain from "./projectPages/Fractals/FractalsMain";
import FractalsProject0 from "./projectPages/Fractals/FractalsProject0";
import OpenSourceMain from "./projectPages/OpenSource/OpenSourceMain";
import OpenSourceProject0 from "./projectPages/OpenSource/OpenSourceProject0";
import NumericalComputationMain from "./projectPages/NumericalComputation/NumericalComputationMain";
import NumericalComputationProject0 from "./projectPages/NumericalComputation/NumericalComputationProject0";
import NumericalComputationProject1 from "./projectPages/NumericalComputation/NumericalComputationProject1";
import NumericalComputationProject2 from "./projectPages/NumericalComputation/NumericalComputationProject2";
import {Navigation} from 'react-mdl';


class TestingPage extends Component{

    
    constructor(props){
        super(props);
        this.projectTabs = React.createRef();
        this.displayProjects = React.createRef();
        this.state={
            colStates: ["nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols", "nonactiveCols"],
            backgrounds: [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14],
            previousColState: null,
            currentBackground: pic0,
            showDetail: false,
            tester: '3',
            wiggler: Array(15).fill('20px'),
            currentCloseUp: [
                                <ArtificalIntelligenceMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<ArtificialIntelligenceProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>,
                                    <ArtificialIntelligenceProject1 tester="5" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>,
                                    <ArtificialIntelligenceProject2 tester="5" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>
                                    ],
                                <MachineLearningMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<MachineLearningProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>,
                                    <MachineLearningProject1 tester="5" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>,
                                    <MachineLearningProject2 tester="5" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>
                                    ],
                                <DatabasesMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<DatabasesProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>],
                                <InternetworkingProtocolsMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<InternetworkingProtocolsProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>],
                                <MusicAndDigitalSignalProcessingMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [
                                        <MusicAndDigitalSignalProcessingProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>,
                                        <MusicAndDigitalSignalProcessingProject1 tester="5" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>
                                    ],
                                <SoftwareEngineeringMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<SoftwareEngineeringProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>],
                                <FunctionalProgrammingMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<FunctionalProgrammingProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>],
                                <FrontEndWebDevelopmentMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<FrontEndWebDevelopmentProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>],
                                <FractalsMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<FractalsProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>],
                                <OpenSourceMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<OpenSourceProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>],
                                <NumericalComputationMain tester = "null" showingDetail="false" changeShowing={(n) => this.showDetails(n)}/>, 
                                    [<NumericalComputationProject0 tester="3" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>,
                                    <NumericalComputationProject1 tester="5" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>,
                                    <NumericalComputationProject2 tester="5" showingDetail = "true" changeShowing={() => this.showDetails(null)}/>
                                    ],        
                                ],
                                   
            currentCloseUpIndex: -1,
            currentHover: -1,
            currentPageIndex: -1,
            currentHeader: 'PROJECTS',
            rollDown: false,
            headers: ['ARTIFICIAL INTELLIGENCE', 'MACHINE LEARNING', 'DATABASES', 'INTERNETWORKING PROTOCOLS', 'MUSIC AND DIGITAL SIGNAL PROCESSING', 'SOFTWARE ENGINEERING', 'FUNCTIONAL PROGRAMMING', 'FRONT-END WEB DEVELOPMENT', 'FRACTALS', 'OPEN SOURCE', 'NUMERICAL COMPUTATION', 'MODELING AND SIMULATION IN PYTHON', 'ALGORITHMS', 'THEORY OF COMPUTATION', 'QUANTUM COMPUTING', 'PROJECTS']                       
        }
    }

    setActiveTab = (tabNumber) => {

        let allTabs = Array(15).fill('nonactiveCols');
        allTabs[tabNumber] = 'activeCol';
        console.log('allTabs: ' + allTabs);
        //this.state.colStates[tabNumber] = "activeCol";
        this.setState({currentBackground: this.state.backgrounds[tabNumber], currentPageIndex: (tabNumber * 2), currentHeader: this.state.headers[tabNumber]});
        if(this.state.previousColState === null){
            this.setState({previousColState: tabNumber})
        }

        if (tabNumber !== this.state.previousColState){
            this.setState({colStates: allTabs})
            this.setState({previousColState: tabNumber});
        }
        
        this.setState({rollDown: true});
        //this.scrollToBottom();

        
        

    }


    showDetails = (num) => {
        let showOrNo = this.state.showDetail;
        this.setState({tester: num, showDetail: !showOrNo, currentCloseUpIndex: num});
        console.log('showdetail: ' + this.state.showDetail);
        console.log('currentCloseUpIndex: ' + this.state.currentCloseUpIndex);
        console.log('tester: ' + this.state.tester);
    }

    settingIndex = (num) => {
        this.setState({currentCloseUpIndex: num})
        console.log('Setting Index: ' + this.state.currentCloseUpIndex);
    }

    setWiggle = (index, value) => {
        if (this.state.currentHover === -1){
            this.setState({currentHover: index})
        }
        else if (this.state.currentHover === index && this.state.colStates[index] === 'activeCol'){
            value = 'activeCol';
        }
        this.setState({currentHover: index});

        if (this.state.colStates[index] !== "activeCol"){
        this.setState(() => {
          const colStates = this.state.colStates.map((item, j) => {
            if (j === index) {
                this.setState({currentHover: index});

              return value;
            } 
            else {
                if (item === 'nonactiveColsHover'){
                    item = 'nonactiveCols';
                }
              return item;
            }
          });
     
          return {
            colStates,
          };
        })}
        console.log(this.state.colStates);

    };

    componentDidMount() {
        
        this.scrollToBottom();

    }

    componentDidUpdate(){
        
        this.scrollToBottom();

    }

      scrollToBottom = () => {
        if (this.state.rollDown === true){
          console.log((window.innerHeight + (this.projectTabs.clientHeight * 5)).toString() + 'px');
          console.log(this.displayProjects);
        this.displayProjects.scrollIntoView({ behavior: 'smooth', top: '0' });
        this.setState({rollDown: false});}
      
    }

    render(){
        return (
            <div style={{width: '100%', height: (window.innerHeight + (this.projectTabs.clientHeight * 3)).toString() + 'px', backgroundImage: `url(${this.state.currentBackground})`, backgroundRepeat: 'repeat', backgroundSize: 'cover',
  
  position: 'static'
  }}>
               <div id='projectTabs' ref={pt => {this.projectTabs = pt}}>
                    <Row style={{position: 'static', width: '100%'}}>
                        <Col className={this.state.colStates[0]}  xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(0)} onMouseEnter={() => this.setWiggle(0, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(0, 'nonactiveCols')}>
                            <p className="wiggles">ARTIFICIAL INTELLIGENCE</p>
                        </Col>
                        <Col className={this.state.colStates[1]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(1)} onMouseEnter={() => this.setWiggle(1, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(1, 'nonactiveCols')}>
                            <p className="wiggles">MACHINE LEARNING</p>
                        </Col>
                        <Col className={this.state.colStates[2]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(2)} onMouseEnter={() => this.setWiggle(2, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(2, 'nonactiveCols')}>
                            <p className="wiggles">DATABASES</p>
                        </Col>
                    </Row>
                    <Row style={{position: 'static', width: '100%'}}>
                        <Col className={this.state.colStates[3]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(3)} onMouseEnter={() => this.setWiggle(3, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(3, 'nonactiveCols')}>
                            <p className="wiggles">INTERNETWORKING PROTOCOLS</p>
                        </Col>
                        <Col className={this.state.colStates[4]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(4)} onMouseEnter={() => this.setWiggle(4, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(4, 'nonactiveCols')}>
                            <p className="wiggles" >MUSIC AND DIGITAL SIGNAL PROCESSING</p>
                        </Col>
                        <Col className={this.state.colStates[5]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(5)} onMouseEnter={() => this.setWiggle(5, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(5, 'nonactiveCols')}>
                            <p className="wiggles">SOFTWARE ENGINEERING</p>
                        </Col>
                    </Row>
                    <Row style={{position: 'static', width: '100%'}}>
                        <Col className={this.state.colStates[6]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(6)} onMouseEnter={() => this.setWiggle(6, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(6, 'nonactiveCols')}>
                            <p className="wiggles">FUNCTIONAL PROGRAMMING</p>
                        </Col>
                        <Col className={this.state.colStates[7]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(7)} onMouseEnter={() => this.setWiggle(7, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(7, 'nonactiveCols')}>
                            <p className="wiggles">FRONT-END WEB DEVELOPMENT</p>
                        </Col>
                        <Col className={this.state.colStates[8]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(8)} onMouseEnter={() => this.setWiggle(8, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(8, 'nonactiveCols')}>
                            <p className="wiggles">FRACTALS</p>
                        </Col>
                    </Row>
                    <Row style={{position: 'static', width: '100%'}}>
                        <Col className={this.state.colStates[9]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(9)} onMouseEnter={() => this.setWiggle(9, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(9, 'nonactiveCols')}>
                            <p className="wiggles">OPEN SOURCE</p>
                        </Col>
                        <Col className={this.state.colStates[10]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(10)} onMouseEnter={() => this.setWiggle(10, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(10, 'nonactiveCols')}>
                            
                            <p className="wiggles">NUMERICAL COMPUTATION</p>
                        </Col>
                        <Col className={this.state.colStates[11]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(11)} onMouseEnter={() => this.setWiggle(11, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(11, 'nonactiveCols')}>
                            <p className="wiggles" >MODELING AND SIMULATION IN PYTHON</p>
                        </Col>
                    </Row>
                    <Row style={{position: 'static', width: '100%'}}>
                        <Col className={this.state.colStates[12]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(12)} onMouseEnter={() => this.setWiggle(12, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(12, 'nonactiveCols')}>
                            <p className="wiggles" >ALGORITHMS</p>
                        </Col>
                        <Col className={this.state.colStates[13]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(13)} onMouseEnter={() => this.setWiggle(13, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(13, 'nonactiveCols')}>
                            <p className="wiggles">THEORY OF COMPUTATION</p>
                        </Col>
                        <Col className={this.state.colStates[14]} xs = {12} sm={4} md={4} lg={4} onClick={() => this.setActiveTab(14)} onMouseEnter={() => this.setWiggle(14, 'nonactiveColsHover')} onMouseLeave={() => this.setWiggle(14, 'nonactiveCols')}>
                            <p className="wiggles">QUANTUM COMPUTING</p>
                        </Col>
                      
                    </Row>
                </div>
                <div style={{marginTop: this.projectTabs.clientHeight/4.0}} />
                            <h1 className = 'projectsPageHeader' ref={dp => { this.displayProjects = dp; }} style={{backgroundColor: 'black', opacity: '.72', marginTop: this.projectTabs.clientHeight/4.0}}>{this.state.currentHeader}</h1>
                  
                    {!this.state.showDetail ?
                        this.state.currentCloseUp[this.state.currentPageIndex]
                    :
                    this.state.currentCloseUp[this.state.currentPageIndex + 1][this.state.currentCloseUpIndex]
                }
                       
                       <div style={{marginTop: this.projectTabs.clientHeight * .75}} />

            </div>
        )
    }
}

export default TestingPage;