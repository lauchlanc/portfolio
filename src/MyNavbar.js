import React, {Component} from 'react'
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import MenuItem from "react-bootstrap/es/MenuItem";
import NavDropdown from "react-bootstrap/es/NavDropdown";

class MyNavbar extends Component {
    constructor(props) {
        super(props)
        this.getMenuItem = this.getMenuItem.bind(this)
        this.update = this.update.bind(this)
    }

    getMenuItem(page, i) {
        return (
            i !== 0 ?
            <MenuItem key={i}
                      onClick={(e) => this.update(e, i)}>
                {page.name}
            </MenuItem>
            : null
        )
    }

    update(e, page) {
        e.preventDefault();
        this.props.update(page)
    }

    render() {
        return (
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand" onClick={(e) => this.update(e, 0)}>Lauchlan Chisholm</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="#" onClick={(e) => this.update(e, 0)}>
                            Home
                        </NavItem>
                        <NavDropdown title="Languages Spoken" id="nav-dropdown">
                            {this.props.pages.map(this.getMenuItem)}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MyNavbar