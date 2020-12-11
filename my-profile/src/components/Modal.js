import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter } from 'mdbreact';

const Modal = forwardRef(
    (
        {
            size = "md",
            callback,
            //children,
        },
        ref
    )  => {
        const [dialog, isOpen] = useState(false);

        const openDialog = () => {
            isOpen(true);
        };
        const closeDialog = () => {
            isOpen(false);  
        }; 
        useImperativeHandle(ref, () => ({
            toggle() {
                if (dialog) {
                closeDialog();
                } else {
                openDialog();
                }
            },
        }));
        return (
              <MDBModal isOpen={dialog} toggle={openDialog} size={size} centered>
                <MDBModalHeader color="white" className="text-center" titleClass="w-100 font-weight-bold custom-modal-header" toggle={()=> isOpen(false)}>Email Me !</MDBModalHeader>
                <MDBModalBody>
                  <form className="mx-3 grey-text">
                    <MDBInput label="Enter email" icon="at" group type="email" validate error="wrong" success="right" />
                    <MDBInput label="Enter an optional Message" icon="comment-alt" group type="textarea" rows="5" style={{minHeight:'50px'}}/>
                  </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center">
                  <MDBBtn className="custom-modal-btn custom-btn" onClick={()=> isOpen(false)}>Submit</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
        );
    }
);

export default Modal;