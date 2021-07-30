import React from 'react'
import { NavLink, Navbar } from 'react-bootstrap'



const Navbar = () => {
    return(
<Navbar bg="primary" variant="dark">
<Container>
<Navbar.Brand href="#home">NMon Resto</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Commander</Nav.Link>
  <Nav.Link href="#pricing">Sing In</Nav.Link>
</Nav>
</Container>
</Navbar>
    )}

export default Navbar