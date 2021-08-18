import React, { useState, useEffect, useForceUpdate, useReducer } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import MessageRow from './messageRow';


const MessageList = ({sentMessages}) => {
    
    const getRowsData = function () {
       console.log('rowData', sentMessages)
       if(sentMessages.length != 0){ 
        return sentMessages.map((row, index) => {
            console.log(row, index)
            return <MessageRow index={index}
            otpSent={row.Otp} sentTo={row.UserPhoneNo} ></MessageRow>
        })
    }
    }



    

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Sno</Th>
                    <Th>OTP</Th>
                    <Th>Sent To</Th>
                </Tr>
            </Thead>
            <Tbody>
                {getRowsData()}

            </Tbody>
        </Table>
    );
}

export default MessageList;