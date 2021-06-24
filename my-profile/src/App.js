import React, {useEffect}from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import {
MDBContainer, MDBCol, MDBRow
} from "mdbreact";

import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import me from './assets/images/me.jpg';
import background from './assets/images/background.jpeg';

const App = () =>{

  useEffect(() => {
    AOS.init({
    duration : 1000,
    once: true,
    });
  },[]); 

  return (
    
      <MDBContainer fluid>   
      {/* navbar */}
      <Header/>
      {/* Introduction */}
      <MDBContainer fluid style={{minHeight:'100vh', backgroundImage:`url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <MDBContainer fluid style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6'}}>
          <MDBContainer fluid className="custom-div-jb-header">
              <MDBContainer className="text-center" >
              <h2 className="h1 display-3 w3-animate-opacity" >Hello! I am Joshua Mark Sugatan</h2>
              </MDBContainer>
              <MDBContainer center="true" className="text-center" style={{zIndex:'1029',position:'relative'}}>        
                <img src={me} alt="Graduation" className="custom-img w3-animate-opacity mt-3" style={{boxShadow:'0px 10px 10px 0px rgba(0,0,0,0.5)'}}/>
              </MDBContainer>
          </MDBContainer>
          <WorkExperience />
          <MDBRow>
            <MDBCol lg="12" style={{padding:'0'}}>
              <hr style={{width:'100%', borderTop: '1px solid rgba(0,0, 0, 0.3)'}}/>
            </MDBCol>
            <MDBCol lg="12" className="custom-col-carousel"style={{flexGrow:'1'}}>
              <Projects />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
      {/* end of body */}

      {/* footer */}
      <Footer />
      </MDBContainer>
    );
}

export default App;