import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navbarwith(props) {
const { name = 'Ian Strand\'s Navbar', link1 = 'Home', link2 = 'Page 2', link3 = 'Page 3', url1 = 'https://ianstrand.github.io/webd171-3/#home', url2 = 'https://ianstrand.github.io/webd171-3/#page2', url3 = 'https://ianstrand.github.io/webd171-3/#page3' } = props;
return (
<div className="navbar-content">
  <Navbar bg="light" expand>
    <Navbar.Brand href={url1}>{name}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" activeKey="{url1}">
        <Nav.Link href={url1}>{link1}</Nav.Link>
        <Nav.Link href={url2}>{link2}</Nav.Link>
        <Nav.Link href={url3}>{link3}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
);
};

export default Navbarwith;