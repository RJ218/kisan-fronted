import React, { useState } from 'react';
import Modal from 'react-modal';
import './contactInfo.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#DCF0DC'
    },
};


const ContactInfo = ({ modalIsOpen, closeModal, setIsOpen, currentContact, setCurrentContact, toggleMessageModal }) => {


    function closeModal(isOpen) {
        setCurrentContact('')
        setIsOpen(false);
    }

    function openMessageModal(){
        setIsOpen(false);
        toggleMessageModal();
    }

    return (
        <div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 >Contact Information</h2>
                <div className='orderInfo'>
                    <p><samll>FirstName: </samll><big>{currentContact.FirstName}</big></p>
                    <p><samll>LastName: </samll><big>{currentContact.LastName}</big></p>
                    <p><samll>PhoneNumber: </samll><big>{currentContact.PhoneNumber}</big></p>


                </div>
                
                <button className='sendMessage' onClick={openMessageModal}>Send Message</button>


            </Modal>
        </div>
    );
}

export default ContactInfo;