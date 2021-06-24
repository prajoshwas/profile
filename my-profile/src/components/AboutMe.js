import React from 'react';
import {
    MDBContainer, MDBCol, MDBRow, MDBJumbotron
} from "mdbreact";

const AboutMe = (props) => {

    return(
        <MDBCol lg="6" md="6" sm="12" xs="10" className="custom-div">
        <MDBJumbotron>
            <h2 className="text-center my-4" data-aos="fade-up" data-aos-easing="ease-in-sine">About me</h2>
            <MDBContainer className="text-center custom-div-jb text-center " data-aos="fade-up" data-aos-easing="ease-in-sine" style={{width:'80%', boxShadow: 'rgb(0 0 0 / 30%) 0px 5px 5px 0px'}}>
            <p>I am Software Developer knowledgeable on the following technologies</p>
            <MDBRow lg="1">
            <MDBCol lg='12' className="text-left align-self-center">
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
        </MDBJumbotron>
        </MDBCol>
    );
}

export default AboutMe;