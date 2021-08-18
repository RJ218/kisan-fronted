import React, {useState} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const RenderRow = ({contact, index, setCurrentContact}) =>{
    const [contactInfo, setContactInfo] = useState(contact)
    
    const OnRowClick = e =>{
        e.preventDefault();
        setCurrentContact(contact)
        console.log(contact)
        
    }

    return(
        <Tr key={index} onClick={OnRowClick}>
            
            <Td>{index}</Td>
            <Td>{contact.FirstName}</Td>
            <Td>{contact.LastName}</Td>
            
        </Tr>)
   }

export default RenderRow;