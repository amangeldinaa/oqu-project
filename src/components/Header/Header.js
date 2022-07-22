import {React, useState} from 'react'
import {AppBar, Typography, Toolbar, Tab, Tabs} from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import "./Header.css"
import {NavLink} from "react-router-dom"

const Header = () => {
    const [value, setValue] = useState();

    return (
        <div >
        <AppBar position="sticky"
            sx={{backgroundColor: 'white'}}
        >
            <Toolbar  >
                <Typography LinkComponent={NavLink} to="/home" style={{color:'rgb(0, 0, 105)'}}>
                    <AutoStoriesIcon/>
                    EasyRead
                </Typography>
                <Tabs
                    sx={{ml: "auto"}}
                    textColor="inherit" 
                    indicatorColor="primary"
                    value={value}
                    onChange={(e,val)=>setValue(val)}
                >
                    <Tab LinkComponent={NavLink} to="/home" style={{color: "rgb(0, 0, 105)"}} label="Home"/>
                    <Tab LinkComponent={NavLink} to="/allbooks" style={{color: "rgb(0, 0, 105)"}} label="Show all books"/>
                </Tabs>
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header