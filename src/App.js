import React from 'react';
import './App.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link, Route } from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      homeClicked: false,
      servicesClicked: false,
      contactClicked: false
    };
  }

  homeClicked=()=>{
    this.setState({homeClicked: true,servicesClicked: false,contactClicked: false})
  }

 servicesClicked=()=>{
  this.setState({homeClicked: false,servicesClicked: true,contactClicked: false})
  }

  contactClicked=()=>{
    this.setState({homeClicked: false,servicesClicked: false,contactClicked: true})
  }
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav>
            <a className="link-top">
             <Link to="/" className={(this.state.homeClicked)?"clicked link-top":"link-top"} onClick={this.homeClicked}>HOME</Link>
            </a>
          
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav >
              <Link to="/services" className={(this.state.servicesClicked)?"clicked link-top":"link-top"} onClick={this.servicesClicked}>Services</Link>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >
              <Link to="/services/entrepreneurs" className={(this.state.isclicked)?"clicked":""} onClick={this.Clicked}>For entrepreneurs</Link>
              </DropdownItem>

              <DropdownItem >
                <Link to="/services/students" className={(this.state.isclicked)?"clicked":""} onClick={this.Clicked}>for students</Link>
              </DropdownItem>

              <DropdownItem>
                <Link to="/services/hobbyiests" className={(this.state.isclicked)?"clicked":""} onClick={this.Clicked}>for hobbyiests</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
              <Link to="/contact" className={(this.state.contactClicked)?"clicked link-top":"link-top"} onClick={this.contactClicked}>Contact us</Link>
        </Nav>
        <hr />

        <div>
        <Route exact path="/" render={()=><h1>Welcome Home ;)</h1> } />
        <Route exact path="/services" component={this.Services}/>
        <Route path="/services/entrepreneurs" render={()=><h2>This is your space 'Entrepreneurs'</h2>}/>
        <Route path="/services/students" render={()=><h2>This is your space 'Students'</h2>}/>
        <Route path="/services/hobbyists" render={()=><h2>This is your space 'Hobbyists'</h2>} />
        <Route  path="/contact" render={()=><h1>Contact US on : khaled_amari@live.fr</h1> } />
        </div>
      </div>
    );
  }
  
  
}


