import React, {useState}from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBIcon, MDBContainer, MDBFooter, MDBCol, MDBRow, MDBJumbotron, MDBBtn, MDBTooltip, MDBCarousel, 
MDBCarouselInner, MDBCarouselItem, MDBView,MDBCarouselCaption, MDBMask
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import cloudNinjaWallpaper from './assets/images/website-banner4.png';
import allianceLogo from './assets/images/asilogo.png';
import me from './assets/images/me.jpg';

const App = () =>{
const[collapse, isOpen] = useState('');

const toggleCollapse = () => {
  isOpen(!collapse);
}

const openInTab = (url,e)=>{
  e.preventDefault();
  var win = window.open(url);
  win.focus();
}

const icons = [
  {
    icon:'facebook',
    alt:'https://www.facebook.com/prajoshwas',
    title:'https://www.facebook.com/prajoshwas',
    className:"custom-fab-fb p-3",
  },
  {
    icon:'twitter',
    alt:'twitter',
    title: 'https://twitter.com/prajoshwas',
    className:"custom-fab-twitter p-3", 
  },
  {
    icon:'instagram',
    alt:'instagram',
    title:'https://www.instagram.com/jshugatan/',
    className:"custom-fab-instagram p-3",
  },
  {
    icon:'linkedin',
    alt:'linkedin',
    title:'https://www.linkedin.com/in/joshua-mark-sugatan-652882156/',
    className:"custom-fab-linkedin p-3",
  },
]
  return (
    <Router>

      <MDBContainer fluid>
      {/* navbar */}
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">Profile</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/profile">
                <MDBIcon icon="home" className="pr-2" size='lg'></MDBIcon>
                <span style={{fontSize:'16px'}}>Home</span>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/profile">
                <MDBIcon icon="phone-alt" className="pr-2" size="lg"></MDBIcon>
                <span style={{fontSize:'16px'}}>Contact Me</span>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

      {/* body */}

      <MDBContainer fluid style={{minHeight:'100vh',overflowX:'hidden'}}>
        <MDBRow>
          <MDBCol lg="12" style={{flexGrow:'1'}}>
          <MDBJumbotron>
            <MDBContainer className="text-center">
            <h2 className="h1 display-3">Hello! I am Joshua Mark Sugatan</h2>
            </MDBContainer>
            <MDBContainer center className="text-center my-5">        
              <img src={me} alt="Graduation Picture" className="custom-img"/>
            </MDBContainer>
          <MDBContainer fluid className="pt-3 custom-div-jb" style={{width:'50%'}}>
            <p className="lead">
              I am a software developer, currently working at CloudNinja PH ( Aug 2020 - Present )
            </p>
            <hr className="my-2" />
            <img src={cloudNinjaWallpaper} style={{maxWidth:"100%",height:'auto'}} alt="Cloud Ninja Logo"></img>
            <p className="mt-2">
             Cloud Ninja PH is a Software Solutions, AI, and Robotics Company providing reliable, hassle-free, value-for-money software solutions, products, and services.
            </p>

            <MDBTooltip placement="right">
              <MDBBtn className="custom-btn" onClick={e => openInTab("https://cloudninja.ph/",e)}>Learn More</MDBBtn>
              <div >Click me to know more</div>
            </MDBTooltip>

            <hr className="my-2" />
            <p>
              My previous work experience was in Alliance Software Inc. ( Apr 2019 - Aug 2020 )
            </p>
            <img src={allianceLogo} style={{maxWidth:'100%',height:'auto'}} alt="Alliance Logo"/>
            <p className="mt-2">
              Alliance Software, Inc. is a Global IT Services and Solutions Company.
            </p>
            <MDBBtn className="custom-btn" onClick={e => openInTab("https://alliance.com.ph/",e)}>Learn More</MDBBtn>
          </MDBContainer>
          </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol lg="12" style={{backgroundColor:'#393e46'}}>
          <hr style={{width:'100%'}}/>
        </MDBCol>
        <MDBCol lg="12" style={{flexGrow:'1',padding:'50px',backgroundColor:'#393e46'}}>
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
      <MDBFooter style={{bottom:'0', marginTop:'auto'}}>
        <MDBContainer className="py-3 text-center text-md-left">
          <MDBRow>
            <MDBCol lg="6" md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol lg="6" md="6">
              <h5 className="title font-weight-bold">CONTACT ME AT :</h5>
              {
                icons.map((item,idx) =>
                (
                    <MDBIcon fab 
                    onClick={e => openInTab(item.title,e)}
                    className={item.className} 
                    icon={item.icon} 
                    alt={item.alt} 
                    title={item.title}
                    size="3x"
                    key={idx}>
                    </MDBIcon>
                ))
              }
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      
        </MDBFooter>
      </MDBContainer>
    </Router>
    );
}

export default App;