import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

function Nav() {
  return (
    <>
    <div className='container'>
        <div className="content">
            <div className="logo">
            <Link to="/" className='logo1'>JOS MEET</Link>
            </div>
            <div className="regis">
                <button><Link className='btnL' to="/logins">Login</Link></button>
                <button><Link className='btnL' to="/signup">Register</Link></button>
                <button><Link className='btnL' to="/register">View Plan</Link></button>
            </div>
        </div>
    </div>
  
    </>
  )
}

export default Nav
