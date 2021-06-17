import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact';

const Carousel = (props) => {

    const items = props.items;
    return(
        <MDBCarousel
        activeItem={1}
        length={items.length}
        showControls={true}
        showIndicators={true}
        className={`z-depth-1 ${props.class}`}
        interval={props.interval}
        onHoverStop={true}
        slide>
            <MDBCarouselInner>
            {items.map((item, key) => (
                <MDBCarouselItem itemId={item.id} key={key}>
                     <MDBView className={props.style}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={item.alt}
                        />
                    </MDBView>
                </MDBCarouselItem>
            ))}
            </MDBCarouselInner>
        </MDBCarousel>
    );

};

export default Carousel;