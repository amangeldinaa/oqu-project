import {React, useState} from 'react'
import {AppBar, Typography, Toolbar, Tab, Tabs} from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import "./Header.css";
import {NavLink} from "react-router-dom";
import BookIcon from "../../assets/books.png";
import {ReactComponent as FilterIcon} from "../../assets/filtericon.svg";
import { createTheme } from '@mui/material/styles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import { orange, brown, green } from "@material-ui/core/colors";

const Header = () => {
    const [value, setValue] = useState();

    // const theme = createTheme({
    //     palette: {
    //       primary: 'brown',
    //       secondary: 'orange',
    //     },
    //   });

    return (
        <div className="container">
        <AppBar position="sticky"
            // sx={{backgroundColor: 'white'}}
            style={{ height:'5%',background: '#f3e5d0', boxShadow: 'none'}}
            // elevation={0}
        >
            <Toolbar  >
                <Typography LinkComponent={NavLink} to="/home" style={{color:'black'}}>
                    {/* <AutoStoriesIcon/> */}
                    OQU
                </Typography>
                   <Tabs
                    sx={{ml: "auto"}}
                    // textColor="inherit" 
                    // indicatorColor="primary"
                    value={value}
                    onChange={(e,val)=>setValue(val)}
                >
                    <Tab 
                        LinkComponent={NavLink} 
                        to="/home" 
                        style={{color: "black"}} 
                        label={<><image src={BookIcon}/> Домой</>}
                    />
                    <Tab LinkComponent={NavLink} 
                        to="/allbooks" 
                        style={{color: "black"}} 
                        label="Книги"/>
                </Tabs> 
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header