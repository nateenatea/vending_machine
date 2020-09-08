import React from 'react';
import './App.css';
import { Navbar,Nav } from 'react-bootstrap'
import Drinks from './Drinks';

function App()  {
  
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Vending Manchine</Navbar.Brand>
          <Nav>
            <Nav.Link href="https://github.com/nateenatea/fullstackdev-internship-challenge">Github</Nav.Link>
          </Nav>
        </Navbar>
        <Drinks />
      </div>
    );
}

export default App;