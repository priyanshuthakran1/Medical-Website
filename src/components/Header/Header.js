import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './style.module.css';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
// import {LINKS} from '../../data';
export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <NavLink to='/'>MEDIC</NavLink>
        </div>

        <div className={classes.links}>
            
<NavLink to='/' className={({ isActive }) => (isActive ? classes.activeLink : '')}>Home</NavLink>
<NavLink to='/about' className={({ isActive }) => (isActive ? classes.activeLink : '')}>About</NavLink>
<NavLink to='/contact' className={({ isActive }) => (isActive ? classes.activeLink : '')}>Contact</NavLink>
<NavLink to='/feedback' className={({ isActive }) => (isActive ? classes.activeLink : '')}>Feedback</NavLink>

        </div>
        <div className={classes.auth}>
          <NavLink to='/signin' className={classes.login}>Login</NavLink>
          <span>/</span>
          <NavLink to='/signup' className={classes.signup}>Sign Up</NavLink>
        </div>
        <div className={classes.menuBtn}>
          <MenuIcon size={30} />
        </div>
      </div>
    </header>
  );
}

export default Header;
