import React from 'react';
import {Link} from 'react-router';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem } from 'react-bootstrap';


export default class Header extends React.Component{
    constructor(){
        super();
       
    }

    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    }
    
    renderMenus(){
        return this.props.menus.map(function(menu,index){
                       return (<li key={index}><Link to={menu.path}>{menu.title}</Link></li>);
        });
                    
    }

    renderDropDown(){
        return this.props.dropdownMenu.map(function(item,index){
            return (
                <MenuItem key={index}>{item}</MenuItem>
            );
        });
    }
    render(){
        return (
           <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#">{this.props.title}</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {this.renderMenus()}
                
                    <NavDropdown eventKey={3} title={this.props.dropdownTitle} id="basic-nav-dropdown">
                       {this.renderDropDown()}
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}; 