import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'  
import logo from '../../assets/logo.png'
import './Navbar.scss'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handelClick = () => {
        setClick(!click)
    }
  return (
    <div className='header'>
        <div className='container'>
            
            <div className='nav-bar'>
                
                <Link to='/'>
                <img src={logo} alt='logo' width={70} />
                </Link>
              
                <ul className= {click ? 'nav-menu activ' : 'nav-menu'}>
                    <li onClick={handelClick}>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li  onClick={handelClick}>
                        <NavLink className='nav-link' to='/about'>About</NavLink>
                    </li>
                    <li  onClick={handelClick}>
                        <NavLink className='nav-link' to='/menu'>Menu</NavLink>
                    </li>
                    <li  onClick={handelClick}>
                        <NavLink className='nav-link' to='/gallery'>Gallery</NavLink>
                    </li>
                    <li  onClick={handelClick}>
                        <NavLink className='nav-link' to='/reservations'>Reservations</NavLink>
                    </li>
                    <li  onClick={handelClick}>
                        <NavLink className='nav-link' to='/location'>Location</NavLink>
                    </li>

                </ul>
                <div className='hamburger' onClick={handelClick}>
                    {
                        click ? (<FaTimes size={20} style={{color:'#fff'}}/> )
                        : (<FaBars size={20} style={{color:'#fff'}}/>)
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar