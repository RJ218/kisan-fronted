import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './contactTable.css'
import RenderRow from './renderRow';

const ContactTable = ({ jsonFileData, setCurrentContact }) => {


    const getKeys = function () {
        return Object.keys(jsonFileData[0])
    }




    const getRowsData = function () {
        console.log(typeof (jsonFileData))
        if (jsonFileData != '') {
            var items = jsonFileData;
            var keys = getKeys();
            console.log(items)
            return items.map((row, index) => {
                console.log(row, index)
                return <RenderRow contact={row} index={index} setCurrentContact={setCurrentContact}></RenderRow>
            })
        }

    }

    return (
        <Table className='Contact Table'>
            <Thead>
                <Tr>
                    <Th>Sno</Th>
                    <Th>FirstName</Th>
                    <Th>LastName</Th>
                </Tr>
            </Thead>
            <Tbody>
                {getRowsData()}
            </Tbody>
        </Table>
    );
}

export default ContactTable;