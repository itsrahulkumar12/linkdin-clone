import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/logo.png'
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileImage from '../images/img-crop.jpg'

const Header = () => {
  return (
    <div className='header'>

        <div className="header__left">
            <img src={Logo}  alt="" className="logo" />


            <div className="header__search">
                <SearchIcon className='searchIcon'/>
                <input type="text" />
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar={ProfileImage} title='Me' />

        </div>
    </div>
  )
}

export default Header