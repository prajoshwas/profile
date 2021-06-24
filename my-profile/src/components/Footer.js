import React from "react";
import {
MDBIcon, MDBContainer, MDBFooter, MDBCol, MDBRow
} from "mdbreact";
import mdbreact from '../assets/images/mdb-react.png';
//import outsystemslogo from '../assets/images/outsystems.png';

const Footer = () => {
    const icons = [
        {
          icon:'facebook',
          alt:'Facebook Profile',
          title:'https://www.facebook.com/prajoshwas',
          className:"custom-fab-fb p-3",
        },
        {
          icon:'twitter',
          alt:'Twitter Profile',
          title: 'https://twitter.com/prajoshwas',
          className:"custom-fab-twitter p-3", 
        },
        {
          icon:'instagram',
          alt:'Instagram Profile',
          title:'https://www.instagram.com/jshugatan/',
          className:"custom-fab-instagram p-3",
        },
        {
          icon:'linkedin',
          alt:'LinkedIn Profile',
          title:'https://www.linkedin.com/in/joshua-mark-sugatan-652882156/',
          className:"custom-fab-linkedin p-3",
        },
        {
          icon:'github',
          alt:'Github Profile',
          title:"https://github.com/prajoshwas",
          className:" custom-fab-github p-3"
        }
    ]
     
    const openInTab = (url,e)=>{
      e.preventDefault();
      var win = window.open(url);
      win.focus();
    }

    return(
    <MDBFooter color="young-passion-gradient" style={{bottom:'0', marginTop:'auto',}}>
            <MDBContainer fluid style={{backgroundColor: 'rgba(0,0,0,0.2)'}} className="py-3 text-center text-md-left" >
            <MDBRow>
              <MDBCol lg="6" md="6" className="text-center align-self-center">
                <h5 className="d-block" style={{fontSize:"20px"}}>This page was created using 
                  <span className="d-block">
                  <MDBIcon className="d-inline-block my-3 custom-react-icon" size="lg" fab icon="react">                
                  </MDBIcon>
                  <span style={{fontSize:'24px'}}> ReactJS </span>
                  and
                  <img className="d-inline-block" alt={'MDBootstrap'} src={mdbreact} style={{width:'70px',marginTop:'-5px'}}/>
                  </span>
                </h5>
              </MDBCol>
              <MDBCol lg="6" md="6" className="text-center mt-3">
                <h5 className="title font-weight-bold"> You can also reach me at</h5>
                {
                    icons.map((item,idx) =>
                    (
                        <MDBIcon fab 
                        onClick={e => openInTab(item.title,e)}
                        className={item.className} 
                        icon={item.icon} 
                        alt={item.alt} 
                        title={item.title}
                        size="2x"
                        key={idx}>
                        </MDBIcon>
                    ))
                }
              </MDBCol>
            </MDBRow>
            </MDBContainer>
        
    </MDBFooter>
    );
}
export default Footer;