import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from "react";
import Example from './components/firstComponent';
import ListOfContacts from './components/ListOfContacts';
import ContactTable from './components/contactTable';
import Contacts from './contacts.json';
import ContactInfo from './components/contactInfo';
import MessageScreen from './components/messageScreen';
import MessageList from './components/messagesList';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [jsonFileData, setJsonFileData] = useState([]);
  const [currentContact, setCurrentContact] = useState('');
  const [modal, setModal] = useState(false);
  const [isSendMessagegOpen, setSendMessage] = useState(false)
  const [sentMessages, setsentMessages] = useState([])
  
async function  getMessages() {
  fetch('http://localhost:3001/getAllMessages').then(response=> response.json()).then(
    data=>{
        console.log(data)
        setsentMessages(data)
    })
}

  useEffect(async () => {
    
    await getMessages()
          
    setJsonFileData(Contacts)

  }, [])

  

  const toggle = () => setModal(!modal);

  const toggleMessageModal = () => setSendMessage(!isSendMessagegOpen)


  
  
  useEffect(()=> { 
    
    
    if(currentContact != '')
    {
      toggle()
    }
  },[currentContact])

  return (
    <div className="App">
      <Container>
      <Row>
        <Col>
        <h1>Contacts</h1>
      <ContactTable jsonFileData = {jsonFileData}
                    setCurrentContact = {setCurrentContact}
                    toggle = {toggle}
      ></ContactTable>
      
      </Col>
      <Col>
      <h1>Sent Messages</h1>
      <MessageList sentMessages = {sentMessages} ></MessageList>
      </Col>
      </Row></Container>
      <ContactInfo setIsOpen={setModal}
                   toggle = {toggle}
                   modalIsOpen = {modal}
                   currentContact = {currentContact}
                   setCurrentContact = {setCurrentContact}
                   toggleMessageModal = {toggleMessageModal}
      ></ContactInfo>
      <MessageScreen setIsOpen={setSendMessage}
                   toggle = {toggleMessageModal}
                   modalIsOpen = {isSendMessagegOpen}
                   currentContact = {currentContact}
                   setCurrentContact = {setCurrentContact}></MessageScreen>

    </div>
  );
}

export default App;
