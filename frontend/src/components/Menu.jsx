import React from 'react'
import { NavLink } from 'react-router-dom'
const navStyles = {
  display: 'flex',
  backgroundColor: '#007bff',
  padding: '10px',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  margin: '0 10px',
  padding: '8px',
  borderRadius: '5px',
  transition: 'background 0.3s',
};

const activeLinkStyles = {
  background: '#007bff',
};
const Login = () =>{
  alert("Coming soon!")
}
function Menu() {
  return (
      <div style={navStyles}>
      <NavLink to="/" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/staffs" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Staffs
      </NavLink>
      <NavLink to="/patients" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Patients
      </NavLink>
      <NavLink to="/appointments" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Appointment
      </NavLink>
      <NavLink to="#" onClick={Login} exact style={linkStyles} activeStyle={activeLinkStyles}>
        Log In
      </NavLink>
    </div>
  )
}

export default Menu