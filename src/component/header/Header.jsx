import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/shop'>
            CONTACT
          </Link>
          {
            currentUser ? <div className='option' onClick = {() => auth.signOut()}>Sign out</div> : <Link className='option' to='/signin'>
           Sign in
          </Link>
          } 
        </div>
      </div>
    )
}

export default Header
