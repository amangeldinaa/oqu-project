import React from 'react'
import {AppBar, Typography, Toolbar, Tab, Tabs} from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import "./Header.css"

const Header = () => {
  return (
    <div >
        <AppBar position="sticky"
            
        >
            <Toolbar  >
                <Typography style={{color:'white'}}>
                    <AutoStoriesIcon/>
                    EasyRead
                </Typography>
                <Tabs
                    
                >
                    <Tab style={{color: "white"}} label="About us"/>
                    <Tab style={{color: "white"}} label="Show all books"/>
                </Tabs>
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header