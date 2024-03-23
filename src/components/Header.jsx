import React from "react";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import profile from '/profile.jpg'
import './header.css'
import { useState } from 'react'
import { Link } from "react-router-dom";


function Header() {

    const [input, setInput] = useState("")
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <MenuSharpIcon />
                    <Link to='/'>
                    <img className="y-logo" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.webp" alt="" />
                    </Link>
                </div>
                <div className="header-center">
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="search" />
                    <button className="b-left">
                        <Link to ={`/search/${input}`}>
                        <SearchSharpIcon className="lens-icon" />
                        </Link>
                    </button>
                    <KeyboardVoiceSharpIcon />
                </div>
                <div className="header-right">
                    <VideoCallOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />
                    {/* <Avatar alt="Remy Sharp" src="profile.jpg" /> */}

                </div>

            </div>
        </>
    )
}
export default Header;