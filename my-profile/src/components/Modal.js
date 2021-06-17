import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter } from 'mdbreact';
import axios from 'axios';


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
        const [name, setName] = useState("");
        const [msg , setText] = useState("");
        const [loading, setDisabled] = useState(false);

        const openDialog = () => {
            isOpen(true);
        };

        const closeDialog = ()  => {
            isOpen(false);  
        }; 

        const submit = () =>{
          setDisabled(true);
          axios.post('https://backend-profilenode.herokuapp.com/send-email',{
              from:name,
              text:msg,
          }).then(resp => {
              setName('')
              setText('')
              setDisabled(false)
              isOpen(false) 
          });
        }

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
              <MDBModal isOpen={dialog} toggle={openDialog} size={size} centered >
                <MDBModalHeader color="white" className="text-center" titleClass="w-100 font-weight-bold custom-modal-header" toggle={()=> isOpen(false)}>Contact Me !</MDBModalHeader>
                <MDBModalBody>
                  <form className="mx-3 grey-text">
                    <MDBInput label="Name" icon="user" group type="text" validate error="wrong" success="right" 
                     value = {name || ""}
                     onChange = {(e) => setName(e.target.value)} />
                    <MDBInput label="Message for Inquiry and/or Opportunity" icon="comment-alt" group type="textarea" rows="5" style={{minHeight:'50px'}}
                    value = {msg || ""}
                    onChange = {(e) => setText(e.target.value)} />
                  </form>
                </MDBModalBody>
                <MDBModalFooter className="justify-content-center">
                  <MDBBtn className="custom-modal-btn custom-btn" onClick={submit} disabled={loading}>
                    {loading && (
                      <i
                        className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px" }}
                      />
                    )}
                    {loading && <span>Loading Data from Server</span>}
                    {!loading && <span>Submit</span>}
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
        );
    }
);
export default Modal;