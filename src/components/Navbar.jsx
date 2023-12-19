import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-center">
        <Nav>
          <NavDropdown title="Φοιτητές/τριες" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Πρόγραμμα Σπουδών</NavDropdown.Item>
            <NavDropdown.Item href="#">Δηλώσεις</NavDropdown.Item>
            <NavDropdown.Item href="#">Πιστοποιητικά</NavDropdown.Item>
            <NavDropdown.Item href="#">Υποτροφίες</NavDropdown.Item>
            <NavDropdown.Item href="#">Ανώτατη Διάρκεια Φοίτησης</NavDropdown.Item>
            <NavDropdown.Item href="#">Ακαδημαϊκοί Σύμβουλοι</NavDropdown.Item>
            <NavDropdown.Item href="#">Φοιτητικά Θέματα</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Διδάσκοντες/ουσες</Nav.Link>
          <Nav.Link href="#">Γραμματεία</Nav.Link>
          <Nav.Link href="#">Ανακοινώσεις</Nav.Link>
          <Nav.Link href="#">Βοήθεια</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">GR</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
