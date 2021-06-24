import React from 'react';
import {
    MDBContainer, MDBCol, MDBRow,
} from "mdbreact";
import mlwallet1 from '../assets/images/ml_wallet1.jpg';
import mlwallet2 from '../assets/images/ml_wallet2.jpg';
import mlwallet3 from '../assets/images/ml_wallet3.jpg';
import helpsystem2 from '../assets/images/ml_help2.PNG';
import helpsystem3 from '../assets/images/ml_help3.PNG';
import Carousel from './Carousel';

const Projects = props => {

    const ml_wallet = [
        {
            id: 1,
            image: mlwallet1,
            alt: 'Login Page',
        },
        {
            id: 2,
            image: mlwallet2,
            alt: 'Transaction',
        },
        {
            id: 3,
            image: mlwallet3,
            alt: 'ML Wallet Features',
        }
    ];

    const help_system = [
        {
            id:1,
            image: helpsystem2,
            alt: 'Responsive Landing Page',
        },
        {
            id:2,
            image: helpsystem3,
            alt: 'Mobile View Landing Page',
        }
    ]
    return(
        <MDBContainer fluid className="my-5">
            <h2 className="text-center" data-aos="fade-up" data-aos-easing="ease-in-sine">Project Experience</h2>
            <MDBContainer fluid>
                <p className="lead text-center" data-aos="fade-up" data-aos-easing="ease-in-sine">
                    These are the projects that I was able to handle and finish throughout my career as a software developer
                </p>
            </MDBContainer>
            <MDBRow className="mt-5">
                <MDBCol lg="6" md="12" sm="12" xs="12"  data-aos="fade-left" data-aos-easing="ease-in-sine">
                    <Carousel items={ml_wallet} 
                        class={'custom-carousel'} 
                        interval={4500} />
                </MDBCol>
                <MDBCol lg="6" md="12" sm="12" xs="12" className="d-flex">
                    <MDBContainer className="align-self-center project-description">
                        <p className="font-weight-bold h2">
                            ML Wallet
                        </p>
                        <p className="h4 lead">
                            E-Wallet App made for MLhuiller. Similar to G-Cash and Paymaya, it is available on playstore and app store.
                        </p>
                        <p className="h6 font-weight-bold"> 
                            Built with React Native and ASP.NET
                        </p>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
                <MDBCol lg="6" md="12" sm="12" xs="12"  data-aos="fade-left" data-aos-easing="ease-in-sine" className="d-flex">
                    <MDBContainer className="align-self-center helpsystem-description">
                        <p className="font-weight-bold h2">
                            ML Wallet Help System
                        </p>
                        <p className="h4 lead">
                            A fully mobile responsive web-app integrated into the mobile app for retrieving username and password.
                        </p>
                        <p className="h6 font-weight-bold"> 
                            Built with ReactJS and Material Design Bootstrap UI Library and ASP.NET
                        </p>
                    </MDBContainer>
                </MDBCol>
                <MDBCol lg="6" md="12" sm="12" xs="12" data-aos="fade-left" data-aos-easing="ease-in-sine">
                    <Carousel items={help_system} 
                        class={'ml-help-style'} 
                        interval={5000} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
 };

 export default Projects;