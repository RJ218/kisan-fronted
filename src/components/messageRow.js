import React, {useState, useEffect, useReducer} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const MessageRow = ({ index, otpSent, sentTo}) =>{
    

    return(
        <Tr key={ index} >
            
            <Td key={'message' + index}>{index}</Td>
            <Td key = {'message'+ otpSent}>{otpSent}</Td>
            <Td key = {'message'+ sentTo}>{sentTo}</Td>
            
        </Tr>)
   }

export default MessageRow;