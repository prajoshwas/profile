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
      {/* navbar */}
      <Header/>

      {/* body */}

      <MDBContainer fluid style={{minHeight:'100vh',overflowX:"hidden"}}>
        <MDBRow>
          <MDBCol  className="w3-container mt-5" lg="6" md="6" sm="12" xs="12">
          <MDBJumbotron>
            <MDBContainer className="text-center">
            <h2 className="h1 display-3 w3-animate-opacity" >Hello! I am Joshua Mark Sugatan</h2>
            </MDBContainer>
            <MDBContainer center="true" className="text-center my-5 ">        
              <img src={me} alt="Graduation Picture" className="custom-img w3-animate-opacity" style={{boxShadow:'0px 10px 10px 0px rgba(0,0,0,0.3)'}}/>
            </MDBContainer>
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
          <MDBCol lg="6" md="6" sm="12" xs="12" className="custom-div">
          <MDBContainer  className="mt-5" style={{padding:'4rem 2rem'}}>
              <h2 className="h1 display-3 text-center"> 
                <strong> About Me </strong> 
              </h2>
          </MDBContainer>
          </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol lg="12" style={{backgroundColor:'#393e46',padding:'0'}}>
          <hr style={{width:'100%'}}/>
        </MDBCol>
        <MDBCol lg="12" className="custom-col-carousel"style={{flexGrow:'1',padding:'50px',backgroundColor:'#393e46'}}>
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