import React, {useState,useEffect,useRef}from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import {
MDBContainer, MDBCol, MDBRow, MDBJumbotron, MDBBtn, MDBTooltip, MDBCarousel, 
MDBCarouselInner, MDBCarouselItem, MDBView,MDBCarouselCaption, MDBMask
} from "mdbreact";

import Header from './components/Header';
import Footer from './components/Footer';

import cloudNinjaWallpaper from './assets/images/website-banner4.png';
import allianceLogo from './assets/images/asilogo.png';
import me from './assets/images/me.jpg';

const App = () =>{

  useEffect(() => {
    AOS.init({
    duration : 1000
    });
  },[]); 

  const openInTab = (url,e)=>{
    e.preventDefault();
    var win = window.open(url);
    win.focus();
  }
  return (
    
      <MDBContainer fluid>   
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"/>

      {/* navbar */}
      <Header/>
      
      {/* Introduction */}
      <MDBContainer fluid style={{minHeight:'100vh',overflowX:"hidden"}}>
        <MDBContainer fluid className="custom-div-jb-header">
            <MDBContainer className="text-center" >
            <h2 className="h1 display-3 w3-animate-opacity" >Hello! I am Joshua Mark Sugatan</h2>
            </MDBContainer>
            <MDBContainer center="true" className="text-center" style={{zIndex:'1029',position:'relative'}}>        
              <img src={me} alt="Graduation Picture" className="custom-img w3-animate-opacity mt-3" style={{boxShadow:'0px 10px 10px 0px rgba(0,0,0,0.5)'}}/>
            </MDBContainer>
        </MDBContainer>
        <MDBRow>
          <MDBCol  className="w3-container" lg="6" md="6" sm="11" xs="10">
          <MDBJumbotron>   
          <h2 className="text-center text-white"> Work Experience</h2>
          <MDBContainer className="pt-3 custom-div-jb text-center w3-animate-bottom" style={{width:'80%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.3)'}}>
              <p className="lead text-center">
                I am a software developer, currently working at CloudNinja PH
              </p>
              <p>
                ( Aug 2020 - Present )
              </p>
              <hr className="my-2" />
              <img src={cloudNinjaWallpaper} style={{maxWidth:"100%",height:'auto', boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.3)'}} alt="Cloud Ninja Logo"></img>
              <p className="mt-2">
              Cloud Ninja PH is a Software Solutions, AI, and Robotics Company providing reliable, hassle-free, value-for-money software solutions, products, and services.
              </p>
            <MDBContainer>
              <MDBTooltip placement="right">
                <MDBBtn className="custom-btn" onClick={e => openInTab("https://cloudninja.ph/",e)}>Learn More</MDBBtn>
                <div >Click me to know more</div>
              </MDBTooltip>

            </MDBContainer>
              <hr className="my-2" />
              <p className="lead">
                My previous work experience was in Alliance Software Inc. 
              </p>
              <p>
              ( Apr 2019 - Aug 2020 )
              </p>
              <img src={allianceLogo} style={{maxWidth:'100%',height:'auto', boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.3)'}} alt="Alliance Logo"/>
              <p className="mt-2">
                Alliance Software, Inc. is a Global IT Services and Solutions Company.
              </p>
            <MDBContainer>
              <MDBBtn className="custom-btn" onClick={e => openInTab("https://alliance.com.ph/",e)}>Learn More</MDBBtn>
            </MDBContainer>

          </MDBContainer>
          
          </MDBJumbotron>
          </MDBCol>

          <MDBCol lg="6" md="6" sm="11" xs="10" className="custom-div p-5">
                  <h2 className="text-center my-4">About me</h2>
          <MDBContainer className="text-center custom-div-jb text-center w3-animate-bottom" style={{width:'80%'}}>
              <p>I am Software Developer knowledgeable on the following technology</p>
              <MDBRow lg="1" className="text-center">
                <MDBCol lg='12'>
                    <li className="text-white">Java SE, J2EE</li>
                    <li className="text-white">C / C++</li>
                    <li className="text-white">C# (.NETCore, .NET Framework, Winforms)</li>
                    <li className="text-white">ASP.NET</li>
                    <li className="text-white">OutSystems</li>
                    <li className="text-white">Springboot</li>
                    <li className="text-white">Spring</li>
                    <li className="text-white">LINQ</li>
                    <li className="text-white">SQL(MySQL)</li>
                    <li className="text-white">Firebase / Firestore</li>
                    <li className="text-white">Native Mobile App Android Development</li>
                    <li className="text-white">Git (CLI) : Git GUI(SourceTree, MS Team Foundation Server, Github)</li>
                    <li className="text-white">Web Development {'&'} Design (HTML, Bootstrap, CSS, Ajax, Jquery)</li>
                    <li className="text-white">Front-side Javascript (ReactJS, Native)</li>
                    <li className="text-white">Server-side Javascript (NodeJS)</li>
                    <li className="text-white">Development of RESTful API</li>
                </MDBCol>
              </MDBRow>
          </MDBContainer>
          </MDBCol>


        </MDBRow>

        <MDBRow>
        <MDBCol lg="12" style={{backgroundColor:'#292a2c',padding:'0'}}>
          <hr style={{width:'100%'}}/>
        </MDBCol>
        <MDBCol lg="12" className="custom-col-carousel"style={{flexGrow:'1',padding:'50px',backgroundColor:'#292a2c'}}>
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                        alt="First slide"
                      />
                    <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">Light mask</h3>
                      <p>First text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                        alt="Second slide"
                      />
                    <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">Strong mask</h3>
                      <p>Second text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                        alt="Third slide"
                      />
                    <MDBMask overlay="black-slight" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive">Slight Mast</h3>
                      <p>Third text</p>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* end of body */}

      {/* footer */}
      <Footer />
      </MDBContainer>
    );
}

export default App;