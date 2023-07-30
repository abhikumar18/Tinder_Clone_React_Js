
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';


function Header() {
  return (
    <div className='header'>
        <PersonIcon fontSize='large'/>
        <img 
        className='header__logo'
        src='https://www.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png' 
        alt='Tinder Image'/>
        <ForumIcon  fontSize='large'/>
    </div>
  )
}

export default Header;