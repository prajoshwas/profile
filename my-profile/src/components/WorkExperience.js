import React from 'react';
import {
    MDBContainer, MDBCol, MDBRow, MDBBtn, MDBTooltip,
} from "mdbreact";
import cloudNinjaWallpaper from '../assets/images/website-banner4.png';
import allianceLogo from '../assets/images/asilogo.png';


const WorkExperience = (props) => {

    
    const openInTab = (url,e)=>{
        e.preventDefault();
        var win = window.open(url);
        win.focus();
    }

    return (
        <MDBRow className="mt-5">
            <MDBCol className="align-self-center" lg="6" md="6" sm="12" xs="12">
                <h2 className="text-center" data-aos="fade-up" data-aos-easing="ease-in-sine"> Work Experience</h2>
                <MDBContainer>
                    <p className="lead text-center" data-aos="fade-up" data-aos-easing="ease-in-sine">
                        These are my work experiences throughout my career from various software development companies
                    </p>
                </MDBContainer>
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12" xs="12">
                <MDBContainer className="pt-3 custom-div-jb text-center" data-aos="fade-up" data-aos-easing="ease-in-sine" style={{width:'60%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.3)'}}>
                    <p className="lead text-center">
                    I am a software developer, currently working at CloudNinja PH
                    </p>
                    <p>
                    ( Aug 2020 - Present )
                    </p>
                    <hr className="my-2" />
                    <img src={cloudNinjaWallpaper} style={{maxWidth:"100%",height:'auto'}} alt="Cloud Ninja Logo"></img>
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
                    <img src={allianceLogo} style={{maxWidth:'100%',height:'auto'}} alt="Alliance Logo"/>
                    <p className="mt-2">
                    Alliance Software, Inc. is a Global IT Services and Solutions Company.
                    </p>
                <MDBContainer>
                    <MDBBtn className="custom-btn" onClick={e => openInTab("https://alliance.com.ph/",e)}>Learn More</MDBBtn>
                </MDBContainer>
                </MDBContainer>
            </MDBCol>
        </MDBRow>
    );
}

export default WorkExperience;