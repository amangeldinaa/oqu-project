import React from 'react'
import {AppBar, Typography, Toolbar, Tab, Tabs} from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import "./Header.css"
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div >
        <AppBar position="sticky"
            
        >
            <Toolbar  >
                <Typography LinkComponent={NavLink} to="/home" style={{color:'white'}}>
                    <AutoStoriesIcon/>
                    EasyRead
                </Typography>
                <Tabs
                    
                >
                    <Tab LinkComponent={NavLink} to="/home" style={{color: "white"}} label="Home"/>
                    <Tab LinkComponent={NavLink} to="/allbooks" style={{color: "white"}} label="Show all books"/>
                </Tabs>
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header