import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './messageScreen.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background:'#DCF0DC'
    },
};


const MessageScreen = ({ modalIsOpen, closeModal, setIsOpen, currentContact, setCurrentContact }) => {
    const [message, setMessage] = useState('')
    const [otp, setOtp] = useState('123456')
    function generateOTP() {
          
        // Declare a digits variable 
        // which stores all digits
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i++ ) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
    useEffect(() => {
        setOtp(generateOTP())
    }, [modalIsOpen])


    useEffect(() => {
        if(modalIsOpen)
       {
       setMessage('Hi. Your OTP is:' + otp)
        }
    }, [modalIsOpen])

    function closeModal(isOpen) {
        setCurrentContact('')
        setIsOpen(false);
    }

    const sendOtp = ()=>{    
        var otpJson = {
            phoneNo:currentContact.PhoneNumber,
            otp:otp,
            message: message}
        console.log(otpJson)
        fetch('http://localhost:3001/saveMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(otpJson)
            }).then(response => response.json()).then(data => {
                console.log(data)
                //setCurrentUser({ id: data._id, Email: data.Email })
                alert('Message Sent.')
                closeModal()

            }).catch(err => {
                console.log(err)
                alert('Already Used Email Id')
            })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Message</h2>
                <div className='orderInfo'>

                    <p><small>To: </small><big>{currentContact.PhoneNumber}</big></p>
                    <textarea  type='text' rows="16" cols="41" value = {message} onChange={e => setMessage(e.target.value)}></textarea >
                </div>
                
                <button className='sendOtpButton' onClick={sendOtp}>Send Message</button>


            </Modal>
        </div>
    );
}

export default MessageScreen;