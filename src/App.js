import React from 'react';
import './App.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  Services=()=>{
    return(<div>
    <Route path="/services/entrepreneurs" render={()=><h2>This is your space 'Entrepreneurs'</h2>}/>
    <Route path="/services/students" render={()=><h2>This is your space 'Students'</h2>}/>
    <Route path="/services/hobbyiests" render={()=><h2>This is your space 'Hobbyiests'</h2>} />
    </div>)
  }

  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink classname="links-color" href="#" active>
             <Link to="/">HOME</Link>
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              <Link to="/services">Services</Link>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >
              <Link to="/services/entrepreneurs">For entrepreneurs</Link>
              </DropdownItem>

              <DropdownItem >
                <Link to="/services/students">for students</Link>
              </DropdownItem>

              <DropdownItem>
                <Link to="/services/hobbyiests">for hobbyiests</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">
              <Link to="/contact">Contact us</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <hr />

        <div>
        <Route exact path="/" render={()=><h1>Welcome Home ;)</h1> } />
        <Route exact path="/services" />
        <Route  path="/contact" render={()=><h1>Contact US on : khaled_amari@live.fr</h1> } />
        <this.Services />
        </div>
      </div>
    );
  }
  
  
}


